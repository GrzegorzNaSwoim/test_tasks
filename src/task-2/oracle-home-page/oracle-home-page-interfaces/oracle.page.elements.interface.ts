import {CookiesPopupPage} from "../oracle-home-page-elements/cookies.popup.page";
import {LanguageSettingsPopupPage} from "../oracle-home-page-elements/language.settings.popup.page";
import {NavigationBarPage} from "../oracle-home-page-elements/navigation.bar.page";

export interface IOraclePageElements
{
    cookiesPopup:CookiesPopupPage;
    languageSettingsPopup:LanguageSettingsPopupPage;
    navigationBar:NavigationBarPage;
}
