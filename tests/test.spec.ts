import {Builder, WebDriver, By, until} from 'selenium-webdriver';
import {Main} from "../components/pages/main";
import {loginInfo, orderInfo, websiteURL} from "../helpers/constants";
import {placeOrder} from "../components/forms/order";

describe('add', function () {
    let driver: WebDriver;
    let mainPage: Main;

    beforeAll(async () => {
        driver = await new Builder().forBrowser('firefox').build();
        mainPage = new Main(driver);
    });

    it('open login form', async () => {
        await mainPage.openURL(websiteURL)
        await mainPage.openLoginWindow();
        const loginModal = await mainPage.driver.findElement(By.id("logInModal"));
        expect(loginModal).toBeTruthy();
    });

    it('login user', async () => {
        await mainPage.openURL(websiteURL);
        await mainPage.loginUser(loginInfo);
        const laptopsLink = await driver.findElement(By.linkText("Laptops"));
        expect(laptopsLink).toBeTruthy();
    });

    it('pick item from category', async () => {
        jest.setTimeout(10000);
        await mainPage.goToItem("Laptops", "Dell i7 8gb");
        const addBtn = await driver.wait(
            until.elementLocated(By.className("btn-success"), 3000)
        );
        expect(addBtn).toBeTruthy();
    });

    it("adds item to cart", async () => {
        const addBtn = await driver.wait(
            until.elementLocated(By.className("btn-success"), 3000)
        );
        addBtn.click();

        await driver.wait(until.alertIsPresent());
        const alert = await driver.switchTo().alert();
        await alert.accept();
        expect(alert).toBeTruthy();
    })

    it("goes to cart page", async () => {
        await mainPage.goToMenuItem("cartur")
        const currentURL = await mainPage.getURL()
        expect(currentURL).toBe("https://www.demoblaze.com/cart.html");
    })

    it("places order", async () => {
        const placeBtn = await driver.wait(
            until.elementLocated(
                By.xpath("//button[contains(text(),'Place Order')]"),
                2000
            )
        );
        await placeBtn.click();
        await placeOrder(driver, orderInfo);
        const sweetAlert = await driver.findElement(By.className("showSweetAlert"));
        expect(sweetAlert).toBeTruthy();
    })

    afterAll(async () => {
        await driver.quit();
    });
});

