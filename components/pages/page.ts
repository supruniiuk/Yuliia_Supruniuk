import {WebDriver} from 'selenium-webdriver';

export class Page {
    _driver: WebDriver;

    constructor(driver: WebDriver) {
        this._driver = driver;
    }

    get driver(): WebDriver {
        return this._driver;
    }

    async getURL() {
        return await this.driver.getCurrentUrl();
    }

    async openURL(URL: string) {
        await this.driver.get(URL);
    }
}