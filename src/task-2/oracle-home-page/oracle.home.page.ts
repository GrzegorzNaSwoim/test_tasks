import {BrowserDriver} from "../driver-wrapper/custom.driver";
import {until} from "selenium-webdriver";
import {OracleHomePageModel} from "./oracle-home-page-models/oracle.home.page.model";
import {CookiesPopup} from "./oracle-home-page-elements/cookies.popup";
import {LanguageSettingsPopup} from "./oracle-home-page-elements/language.settings.popup";
import {NavigationBar} from "./oracle-home-page-elements/navigation.bar";
import {IOraclePageElements} from "./oracle-home-page-interfaces/oracle.page.elements.interface";

/**
 * Represents the Oracle Home Page and manages interactions with its elements.
 */
export class OracleHomePage {
    LOADING_PAGE_TIMEOUT: number = 1000;
    public driver: BrowserDriver;
    public pageElements: IOraclePageElements;
    private oracleHomePageModel: OracleHomePageModel;

    /**
     * Constructor for OracleHomePage.
     * @param webDriver - The browser driver to interact with the Oracle Home Page.
     */
    constructor(webDriver: BrowserDriver) {
        this.driver = webDriver;
        this.oracleHomePageModel = new OracleHomePageModel();
        this.pageElements = {
            cookiesPopup: new CookiesPopup(this.driver, this.oracleHomePageModel.cookiesPopup),
            languageSettingsPopup: new LanguageSettingsPopup(this.driver, this.oracleHomePageModel.languagePopup),
            navigationBar: new NavigationBar(this.driver, this.oracleHomePageModel.navigationBar)
        }
    }

    /**
     * Opens the Oracle Home Page in the browser.
     * This method navigates to the Oracle Home Page URL and waits for the page title to match the expected value.
     */
    public async openOraclePage(): Promise<void> {
        await this.driver.browserDriver.get(this.oracleHomePageModel.PAGE_URL);
        await this.driver.browserDriver.wait(until.titleIs(this.oracleHomePageModel.PAGE_TITLE),
            this.LOADING_PAGE_TIMEOUT);
    }
}



