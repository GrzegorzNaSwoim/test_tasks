import {Builder, WebDriver} from "selenium-webdriver";

export class BrowserDriver {
    public browserDriver: WebDriver;

    public constructor(browserName: string) {
        this.browserDriver = new Builder().forBrowser(browserName).build();
    }
    public async closeBrowser(): Promise<void> {
        await this.browserDriver.quit();
    }
}
