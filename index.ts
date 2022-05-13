import { login } from "./components/forms/login";
import { placeOrder } from "./components/forms/order";
import { loginInfo, orderInfo } from "./helpers/constants";

const { until } = require("selenium-webdriver");
const { Builder, By } = require("selenium-webdriver");
const website = "https://www.demoblaze.com/";

async function test() {
  const driver = await new Builder().forBrowser("firefox").build();
  try {
    await driver.manage().window().maximize();
    await driver.get(website);
    await login(driver, loginInfo);
    await driver.sleep(3000);

    const laptopsLink = await driver.findElement(By.linkText("Laptops"));
    await laptopsLink.click();

    const model = "Dell i7 8gb";
    const laptop = await driver.wait(
      until.elementLocated(By.linkText(model), 3000)
    );
    laptop.click();

    const addBtn = await driver.wait(
      until.elementLocated(By.className("btn-success"), 3000)
    );
    addBtn.click();

    await driver.wait(until.alertIsPresent());
    const alert = await driver.switchTo().alert();
    await alert.accept();

    const cartNav = await driver.findElement(By.id("cartur"));
    cartNav.click();

    const placeBtn = await driver.wait(
      until.elementLocated(
        By.xpath("//button[contains(text(),'Place Order')]"),
        2000
      )
    );
    placeBtn.click();
    await placeOrder(driver, orderInfo);
  } finally {
    await driver.quit();
  }
}

test();
