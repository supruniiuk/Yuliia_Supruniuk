import {Page} from "./page";
import {By, until} from 'selenium-webdriver';
import {LoginForm} from "../../helpers/interfaces";
import {login} from "../forms/login";

export class Main extends Page {
    constructor(driver) {
        super(driver);
    }

    async openLoginWindow() {
        const loginBtn = By.id("login2");
        await this.driver.findElement(loginBtn).click();
    }

    async loginUser(userData: LoginForm) {
        await login(this.driver, userData)
    }

    async goToItem(categoryLinkText: string, model: string) {
        const laptopsLink = await this.driver.findElement(By.linkText(categoryLinkText));
        await laptopsLink.click();

        const laptop = await this.driver.wait(
            until.elementLocated(By.linkText(model), 3000)
        );
        laptop.click();
    }

    async goToMenuItem(itemId: string) {
        const nav = await this.driver.findElement(By.id(itemId));
        await nav.click();
    }
}


