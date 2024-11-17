import {CookiesPopupPage} from "../oracle-home-page-elements/cookies.popup.page";
import {LanguageSettingsPopupPage} from "../oracle-home-page-elements/language.settings.popup.page";
import {NavigationBarPage} from "../oracle-home-page-elements/navigation.bar.page";

export interface IOraclePageElements
{
    readonly cookiesPopup:CookiesPopupPage;
    readonly languageSettingsPopup:LanguageSettingsPopupPage;
    readonly navigationBar:NavigationBarPage;
}
