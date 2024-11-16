import {By} from "selenium-webdriver";
import {CookiesPopupModel} from "./oracle-home-page-popups-model/cookies-popup-model";
import {LanguagePopupModel} from "./oracle-home-page-popups-model/language.popup.model";

export class ResourcesSubMenuModel {
    JAVA_DOWNLOAD_LINK: By = By.xpath(
        '//div[@id="u30nav"]//div[@id="resources-nav"]//a[@data-lbl="resources:downloads/java-downloads"]')
}

export class NavigationBarModel {
    RESOURCES_BUTTON: By = By.xpath('//div[@id="u30nav"]//button[@data-navtarget="resources"]');
    resourcesSubMenu: ResourcesSubMenuModel = new ResourcesSubMenuModel();
}


export class OracleHomePageModel {
    PAGE_URL: string = 'https://www.oracle.com/';
    PAGE_TITLE: string = "Oracle | Cloud Applications and Cloud Platform";
    navigationBar: NavigationBarModel = new NavigationBarModel();
    cookiesPopup: CookiesPopupModel = new CookiesPopupModel();
    languagePopup: LanguagePopupModel = new LanguagePopupModel();
}