import {login} from "../components/forms/login";
import {placeOrder} from "../components/forms/order";
import {loginInfo, orderInfo, websiteURL} from "../helpers/constants";

const {until} = require("selenium-webdriver");
const {Builder, By} = require("selenium-webdriver");

async function test() {
    const driver = await new Builder().forBrowser("firefox").build();
    try {
        await driver.manage().window().maximize();
        await driver.get(websiteURL);
        await login(driver, loginInfo);

        const laptopsLink = await driver.findElement(By.linkText("Laptops"));
        await laptopsLink.click();

        const model = "Dell i7 8gb";
        const laptop = await driver.wait(
            until.elementLocated(By.linkText(model), 3000)
        );
        await laptop.click();

        const addBtn = await driver.wait(
            until.elementLocated(By.className("btn-success"), 3000)
        );
        await addBtn.click();

        await driver.wait(until.alertIsPresent());
        const alert = await driver.switchTo().alert();
        await alert.accept();

        const cartNav = await driver.findElement(By.id("cartur"));
        await cartNav.click();

        const placeBtn = await driver.wait(
            until.elementLocated(
                By.xpath("//button[contains(text(),'Place Order')]"),
                2000
            )
        );
        await placeBtn.click();
        await placeOrder(driver, orderInfo);
    } finally {
        await driver.quit();
    }
}

test();
