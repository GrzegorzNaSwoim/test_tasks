import {By} from "selenium-webdriver";

export class CookiesPopupIframes {
    public readonly MAIN_POPUP_WINDOW_I_FRAME: By = By.xpath('//iframe[@class="truste_popframe"]');
}
export class CookiesPopupIframeButtons{
    public readonly ACCEPT_ALL_COOKIES_BUTTON: By = By.xpath(
        '//div[contains(@class, "mainContent")]//div[contains(@class, "pdynamicbutton")]//a[contains(@class, "call")]')
}
export class CookiesPopupModel{
    public readonly popupWindowIframes: CookiesPopupIframes = new CookiesPopupIframes();
    public readonly popupIframeButtons: CookiesPopupIframeButtons = new CookiesPopupIframeButtons();
}