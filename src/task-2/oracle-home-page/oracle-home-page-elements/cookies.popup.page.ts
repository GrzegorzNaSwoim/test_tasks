import {
    CookiesPopupModel
} from "../oracle-home-page-models/oracle-home-page-popups-model/cookies-popup-model";
import { BrowserDriver } from "../../driver-wrapper/custom.driver";
import { until, WebElement } from "selenium-webdriver";

/**
 * Handles the interaction with the Cookies Popup on the Oracle Home Page.
 */
export class CookiesPopupPage {
    LOADING_TIMEOUT = 5000
    cookiesPopupModel: CookiesPopupModel;
    driver: BrowserDriver;

    /**
     * Constructor for CookiesPopupPage.
     * @param webdriver - The browser driver to interact with the page.
     * @param cookiesPopupModel - The model representing the cookies popup elements.
     */
    constructor(webdriver: BrowserDriver, cookiesPopupModel: CookiesPopupModel) {
        this.driver = webdriver;
        this.cookiesPopupModel = cookiesPopupModel;
    }

    /**
     * Switches the browser context to the cookies popup iframe.
     * @private
     */
    private async _switchContextToCookiesPopup(): Promise<void> {
        let cookiesPopup: WebElement = await this.driver.browserDriver.findElement(
            this.cookiesPopupModel.popupWindowIframes.MAIN_POPUP_WINDOW_I_FRAME);
        await this.driver.browserDriver.switchTo().frame(cookiesPopup);
    }

    /**
     * Clicks the "Accept All" button in the cookies popup.
     * Waits for the button to be located, then clicks it.
     * @private
     */
    private async _clickAcceptAllButton(): Promise<void> {
        await this.driver.browserDriver.wait(until.elementLocated(
            this.cookiesPopupModel.popupIframeButtons.ACCEPT_ALL_COOKIES_BUTTON), this.LOADING_TIMEOUT);
        let acceptCookiesButton = await this.driver.browserDriver.findElement(
            this.cookiesPopupModel.popupIframeButtons.ACCEPT_ALL_COOKIES_BUTTON);
        await acceptCookiesButton.click();
    }

    /**
     * Accepts all cookies by switching to the cookies popup iframe and clicking the "Accept All" button.
     */
    public async acceptAllCookies(): Promise<void> {
        await this._switchContextToCookiesPopup();
        try {
            await this._clickAcceptAllButton();
        } catch (error) {
            console.log(error);
        }
    }
}
