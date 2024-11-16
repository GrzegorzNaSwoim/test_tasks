import {By} from "selenium-webdriver";

export class CookiesPopupIframes {
    MAIN_POPUP_WINDOW_I_FRAME: By = By.xpath('//iframe[@class="truste_popframe"]');
}

export class CookiesPopupIframeButtons{
    ACCEPT_ALL_COOKIES_BUTTON: By = By.xpath(
        '//div[contains(@class, "mainContent")]//div[contains(@class, "pdynamicbutton")]//a[contains(@class, "call")]')
}

export class CookiesPopupModel{
    popupWindowIframes: CookiesPopupIframes = new CookiesPopupIframes();
    popupIframeButtons: CookiesPopupIframeButtons = new CookiesPopupIframeButtons();
}