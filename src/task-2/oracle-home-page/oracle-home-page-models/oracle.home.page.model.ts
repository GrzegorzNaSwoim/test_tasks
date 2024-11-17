import {By} from "selenium-webdriver";
import {CookiesPopupModel} from "./oracle-home-page-popups-model/cookies-popup-model";
import {LanguagePopupModel} from "./oracle-home-page-popups-model/language.popup.model";

export class ResourcesSubMenuModel {
    public readonly JAVA_DOWNLOAD_LINK: By = By.xpath(
        '//div[@id="u30nav"]//div[@id="resources-nav"]//a[@data-lbl="resources:downloads/java-downloads"]')
}

export class NavigationBarModel {
    public readonly RESOURCES_BUTTON: By = By.xpath('//div[@id="u30nav"]//button[@data-navtarget="resources"]');
    public readonly resourcesSubMenu: ResourcesSubMenuModel = new ResourcesSubMenuModel();
}


export class OracleHomePageModel {
    public readonly PAGE_URL: string = 'https://www.oracle.com/';
    public readonly PAGE_TITLE: string = "Oracle | Cloud Applications and Cloud Platform";
    public readonly navigationBar: NavigationBarModel = new NavigationBarModel();
    public readonly cookiesPopup: CookiesPopupModel = new CookiesPopupModel();
    public readonly languagePopup: LanguagePopupModel = new LanguagePopupModel();
}