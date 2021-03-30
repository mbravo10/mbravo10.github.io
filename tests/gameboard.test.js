const puppeteer = require("puppeteer");
let browser;
let page;
// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
async function openBrowser() {
  browser = await puppeteer.launch();
  page = await browser.newPage();
  await page.goto("https://mbravo10.github.io");
}
test("H1 Title has correct text", async () => {
  await openBrowser();
  // other actions...
  let text = await page.$eval("h1", (el) => el.textContent);
  expect(text).toBe("Tic-Tac-Toe!");
});

test("Player displays 0", async () => {
  // other actions...
  var res = await page.$$eval(".toast-body", (el) =>
    el.map((x) => x.textContent)
  );
  expect(res[0]).toBe("Player ❌ wins : 0");
  expect(res[1]).toBe("Player ⭕️ wins : 0");

  page.close();
});
