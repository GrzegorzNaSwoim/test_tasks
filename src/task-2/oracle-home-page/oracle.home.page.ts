import {BrowserDriver} from "../driver-wrapper/custom.driver";
import {until, WebDriver} from "selenium-webdriver";
import {OracleHomePageModel} from "./oracle-home-page-models/oracle.home.page.model";
import {CookiesPopupPage} from "./oracle-home-page-elements/cookies.popup.page";
import {LanguageSettingsPopupPage} from "./oracle-home-page-elements/language.settings.popup.page";
import {NavigationBarPage} from "./oracle-home-page-elements/navigation.bar.page";
import {IOraclePageElements} from "./oracle-home-page-interfaces/oracle.page.elements.interface";

/**
 * Represents the Oracle Home Page and manages interactions with its elements.
 */
export class OracleHomePage {
    private readonly LOADING_PAGE_TIMEOUT: number = 1000;
    public driver: WebDriver;
    public readonly pageElements: IOraclePageElements;
    private readonly oracleHomePageModel: OracleHomePageModel;

    /**
     * Constructor for OracleHomePage.
     * @param webDriver - The browser driver to interact with the Oracle Home Page.
     */
    public constructor(webDriver: WebDriver) {
        this.driver = webDriver;
        this.oracleHomePageModel = new OracleHomePageModel();
        this.pageElements = {
            cookiesPopup: new CookiesPopupPage(this.driver, this.oracleHomePageModel.cookiesPopup),
            languageSettingsPopup: new LanguageSettingsPopupPage(this.driver, this.oracleHomePageModel.languagePopup),
            navigationBar: new NavigationBarPage(this.driver, this.oracleHomePageModel.navigationBar)
        }
    }

    /**
     * Opens the Oracle Home Page in the browser.
     * This method navigates to the Oracle Home Page URL and waits for the page title to match the expected value.
     */
    public async openOraclePage(): Promise<void> {
        await this.driver.get(this.oracleHomePageModel.PAGE_URL);
        await this.driver.wait(until.titleIs(this.oracleHomePageModel.PAGE_TITLE),
            this.LOADING_PAGE_TIMEOUT);
    }
}



