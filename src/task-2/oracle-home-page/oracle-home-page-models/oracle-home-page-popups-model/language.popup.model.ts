import {By} from "selenium-webdriver";

export class LanguageWindowPopupButtons {
    public readonly CLOSE_LANGUAGE_POPUP_BUTTON: By = By.xpath('//button[contains(@class,"icn-close acs-close")]');
}

export class LanguagePopupModel {
    public readonly languageWindowPopupButtons: LanguageWindowPopupButtons =  new LanguageWindowPopupButtons();
}