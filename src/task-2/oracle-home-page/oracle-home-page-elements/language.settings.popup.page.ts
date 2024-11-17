import {LanguagePopupModel} from "../oracle-home-page-models/oracle-home-page-popups-model/language.popup.model";
import {BrowserDriver} from "../../driver-wrapper/custom.driver";
import {until, WebElement} from "selenium-webdriver";

/**
 * Handles the interaction with the Language Settings Popup on the Oracle Home Page.
 */
export class LanguageSettingsPopupPage {
    public readonly LOADING_TIMEOUT = 2000;
    public readonly languagePopupModel: LanguagePopupModel;
    public readonly driver: BrowserDriver;

    /**
     * Constructor for LanguageSettingsPopupPage.
     * @param webdriver - The browser driver to interact with the page.
     * @param languagePopupModel - The model representing the language settings popup elements.
     */
    public constructor(webdriver: BrowserDriver, languagePopupModel: LanguagePopupModel) {
        this.driver = webdriver;
        this.languagePopupModel = languagePopupModel;
    }

    /**
     * Clicks the close button in the language settings popup.
     * Waits for the close button to be located and visible, then clicks it.
     */
    public async clickCloseButton(): Promise<void> {
        await this.driver.browserDriver.wait(until.elementLocated(
            this.languagePopupModel.languageWindowPopupButtons.CLOSE_LANGUAGE_POPUP_BUTTON), this.LOADING_TIMEOUT);
        const closeCountryPopupButton: WebElement = await this.driver.browserDriver.findElement(
            this.languagePopupModel.languageWindowPopupButtons.CLOSE_LANGUAGE_POPUP_BUTTON);
        await this.driver.browserDriver.wait(until.elementIsVisible(closeCountryPopupButton), this.LOADING_TIMEOUT);
        await closeCountryPopupButton.click();
    }

    /**
     * Closes the language settings popup by switching to the default content and clicking the close button.
     */
    public async closeLanguageSettingsPopup(): Promise<void> {
        await this.driver.browserDriver.switchTo().defaultContent();
        await this.clickCloseButton();
    }
}
