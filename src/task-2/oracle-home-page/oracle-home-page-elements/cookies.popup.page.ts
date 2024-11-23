import {CookiesPopupModel} from "../oracle-home-page-models/oracle-home-page-popups-model/cookies-popup-model";
import {until, WebDriver, WebElement} from "selenium-webdriver";

/**
 * Handles the interaction with the Cookies Popup on the Oracle Home Page.
 */
export class CookiesPopupPage {
    public readonly LOADING_TIMEOUT = 5000
    public readonly cookiesPopupModel: CookiesPopupModel;
    public driver: WebDriver;

    /**
     * Constructor for CookiesPopupPage.
     * @param webdriver - The browser driver to interact with the page.
     * @param cookiesPopupModel - The model representing the cookies popup elements.
     */
    public constructor(webdriver: WebDriver, cookiesPopupModel: CookiesPopupModel) {
        this.driver = webdriver;
        this.cookiesPopupModel = cookiesPopupModel;
    }

    /**
     * Switches the browser context to the cookies popup iframe.
     * @private
     */
    private async switchContextToCookiesPopup(): Promise<void> {
        const cookiesPopup: WebElement = await this.driver.findElement(
            this.cookiesPopupModel.popupWindowIframes.MAIN_POPUP_WINDOW_I_FRAME);
        await this.driver.switchTo().frame(cookiesPopup);
    }

    /**
     * Clicks the "Accept All" button in the cookies popup.
     * Waits for the button to be located, then clicks it.
     * @private
     */
    private async clickAcceptAllButton(): Promise<void> {
        await this.driver.wait(until.elementLocated(
            this.cookiesPopupModel.popupIframeButtons.ACCEPT_ALL_COOKIES_BUTTON), this.LOADING_TIMEOUT);
        const acceptCookiesButton = await this.driver.findElement(
            this.cookiesPopupModel.popupIframeButtons.ACCEPT_ALL_COOKIES_BUTTON);
        await acceptCookiesButton.click();
    }

    /**
     * Accepts all cookies by switching to the cookies popup iframe and clicking the "Accept All" button.
     */
    public async acceptAllCookies(): Promise<void> {
        await this.switchContextToCookiesPopup();
        try {
            await this.clickAcceptAllButton();
        } catch (error) {
            console.log(error);
        }
    }
}
