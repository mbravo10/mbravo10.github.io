const puppeteer = require("puppeteer");
var browser;
var page;
// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
async function openBrowser() {
  browser = await puppeteer.launch();
  page = await browser.newPage();
  await page.goto("https://mbravo10.github.io");
}
test("H1 Title has correct text, Tic Tac Toe", async () => {
  await openBrowser();
  // other actions...
  let text = await page.$eval("h1", (el) => el.textContent);
  expect(text).toBe("Tic-Tac-Toe!");
});

test("Both Players display 0 for their text", async () => {
  // other actions...
  var res = await page.$$eval(".toast-body", (el) =>
    el.map((x) => x.textContent)
  );
  expect(res[0]).toBe("Player ❌ wins : 0");
  expect(res[1]).toBe("Player ⭕️ wins : 0");
});

test("Button can be clicked and value be updated to ❌ ", async () => {
  await page.click(".box");
  let res = await page.$eval(".box", (el) => el.textContent);
  expect(res).toBe("❌");
});

test("Button can be clicked and value be a winner with a disabled button", async () => {
  await page.evaluate(() => {
    let ele = document.querySelectorAll(".box");
    for (let i = 0; i < ele.length; i++) {
      ele[i].click();
    }
  });
  let res = await page.$eval(".box", (el) => el.disabled);
  expect(res).toBe(true);
});
