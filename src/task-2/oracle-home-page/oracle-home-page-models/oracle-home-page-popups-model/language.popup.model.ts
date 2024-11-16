import {By} from "selenium-webdriver";

export class LanguageWindowPopupButtons {
    CLOSE_LANGUAGE_POPUP_BUTTON: By = By.xpath('//button[contains(@class,"icn-close acs-close")]');
}

export class LanguagePopupModel {
    languageWindowPopupButtons: LanguageWindowPopupButtons =  new LanguageWindowPopupButtons();
}