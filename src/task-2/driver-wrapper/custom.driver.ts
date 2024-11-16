import {Builder, WebDriver} from "selenium-webdriver";

export class BrowserDriver {
    browserDriver: WebDriver;

    constructor(browserName: string) {
        this.browserDriver = new Builder().forBrowser(browserName).build();
    }
    async closeBrowser(): Promise<void> {
        await this.browserDriver.quit();
    }
}
