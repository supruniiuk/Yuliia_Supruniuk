import {WebDriver} from 'selenium-webdriver';

export class Page {
    #driver: WebDriver;

    constructor(driver: WebDriver) {
        this.#driver = driver;
    }

    get driver(): WebDriver {
        return this.#driver;
    }

    async getURL() {
        return await this.driver.getCurrentUrl();
    }

    async openURL(URL: string) {
        await this.driver.get(URL);
    }
}