import fs from "node:fs/promises";
import puppeteer from "puppeteer-core";

const chromePath = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const viewports = [
  { name: "mobile-390", width: 390, height: 900 },
  { name: "desktop-1440", width: 1440, height: 1000 },
];

const browser = await puppeteer.launch({
  executablePath: chromePath,
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

const results = [];

try {
  await fs.mkdir("verification", { recursive: true });

  for (const viewport of viewports) {
    const page = await browser.newPage();
    const consoleErrors = [];
    const pageErrors = [];

    page.on("console", (message) => {
      if (["error", "warning"].includes(message.type())) {
        consoleErrors.push(`${message.type()}: ${message.text()}`);
      }
    });
    page.on("pageerror", (error) => pageErrors.push(error.message));

    await page.setViewport({ width: viewport.width, height: viewport.height, deviceScaleFactor: 1 });
    await page.goto("http://127.0.0.1:5173/", { waitUntil: "networkidle0" });

    const layout = await page.evaluate(() => ({
      title: document.title,
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      bodyText: document.body.innerText,
    }));
    await page.screenshot({ path: `verification/${viewport.name}.png`, fullPage: true });

    if (viewport.name === "mobile-390") {
      await page.click('button[aria-label="Open menu"]');
      await page.waitForSelector(".mobile-link");
    }

    await page.click("#demo button:nth-of-type(2)");
    await page.keyboard.type("LAUNCH");
    const focusModeText = await page.$eval("#demo", (node) => node.textContent ?? "");
    await page.screenshot({ path: `verification/${viewport.name}-after-interaction.png`, fullPage: true });

    results.push({
      viewport: viewport.name,
      title: layout.title,
      noHorizontalScroll: layout.scrollWidth <= layout.clientWidth,
      scrollWidth: layout.scrollWidth,
      clientWidth: layout.clientWidth,
      hasHeroCopy: layout.bodyText.includes("Ship launches without the last-week scramble."),
      demoChanged: focusModeText.includes("Risks grouped by launch impact"),
      easterEgg: focusModeText.includes("Focus mode unlocked"),
      consoleErrors,
      pageErrors,
    });

    await page.close();
  }
} finally {
  await browser.close();
}

console.log(JSON.stringify(results, null, 2));
