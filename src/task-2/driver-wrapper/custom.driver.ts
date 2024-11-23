import {Builder, Capabilities, WebDriver} from "selenium-webdriver";
import {Options as ChromeOptions} from "selenium-webdriver/chrome";
import {Options as EdgeOptions} from "selenium-webdriver/edge"

type TupleOfStrings = [string, string];

export enum BrowsersUnderTests {
    Chrome = 'chrome',
    Edge = 'MicrosoftEdge',
    FireFox = 'firefox'
};

export class BrowserDriver {
    private browserOptions: ChromeOptions | EdgeOptions | null = null;
    private browserCapabilities: Capabilities | null = null;

    public constructor() {

    }

    private getBrowserOptions(browserName: BrowsersUnderTests): void {
        switch (browserName) {
            case BrowsersUnderTests.Chrome:
                this.browserOptions = new ChromeOptions();
                break
            case BrowsersUnderTests.Edge:
                this.browserOptions = new EdgeOptions();
                break
            default:
                this.browserOptions = new ChromeOptions();
        }
    }

    private getBrowserCapabilities(browserName: BrowsersUnderTests): void {
        switch (browserName) {
            case BrowsersUnderTests.Chrome:
                this.browserCapabilities = Capabilities.chrome();
                break
            case BrowsersUnderTests.Edge:
                this.browserCapabilities = Capabilities.edge();
                break
            default:
                this.browserCapabilities = Capabilities.chrome();
        }
    }

    public setBrowserOption(browserOption: string): void {
        if (this.browserOptions) {
            this.browserOptions.addArguments(browserOption)
        }
    }

    public setMultipleBrowserOptions(browserOptions: string[]): void {
        [...browserOptions].forEach((_option: string): void => {
            this.setBrowserOption(_option)
        })

    }

    public setOptionalBrowserConfiguration(optionalConfiguration: string | string[] = ''): void {
        if (!optionalConfiguration) {
            return;
        }
        if (Array.isArray(optionalConfiguration)) {
            this.setMultipleBrowserOptions(optionalConfiguration);
            return;
        }
        return this.setBrowserOption(optionalConfiguration);

    }

    private getBrowserDriver(browserName: BrowsersUnderTests): WebDriver {
        if (!this.browserCapabilities || !this.browserOptions) {
            throw new Error("Browser capabilities or options are not initialized.");
        }
        switch (browserName) {
            case BrowsersUnderTests.Chrome:
                return new Builder().forBrowser(browserName).withCapabilities(this.browserCapabilities).setChromeOptions(
                    this.browserOptions as ChromeOptions).build();
            case BrowsersUnderTests.Edge:
                return new Builder().forBrowser(browserName).withCapabilities(this.browserCapabilities).setEdgeOptions(
                    this.browserOptions as EdgeOptions).build();
            default :
                return new Builder().forBrowser(browserName).withCapabilities(this.browserCapabilities).setChromeOptions(
                    this.browserOptions as ChromeOptions).build();
        }

    }

    private setOptionalBrowserCapabilities(): void {
    };

    public buildBrowserDriver(browserName: BrowsersUnderTests,
                              optionalConfiguration: string | string[] = ''): WebDriver {
        this.getBrowserOptions(browserName)
        this.setOptionalBrowserConfiguration(optionalConfiguration)
        this.getBrowserCapabilities(browserName)
        this.setOptionalBrowserCapabilities()
        return this.getBrowserDriver(browserName)

    }
}

