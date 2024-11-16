import {describe} from "mocha";

import {expect} from "chai";
import {BrowserDriver} from "../src/task-2/driver-wrapper/custom.driver";
import {OracleHomePage} from "../src/task-2/oracle-home-page/oracle.home.page";
import {OracleJavaDownloadsPage} from "../src/task-2/oracle-java-downloads-page/oracle.java.downloads.page";

describe('Tests related to Oracle java download page', function (): void {
    const EXPECTED_FILE_SIZE: number = 100;
    const TC_TIMEOUT: number = 20000;
    const webDriver: BrowserDriver = new BrowserDriver('chrome');
    const oracleHomePage: OracleHomePage = new OracleHomePage(webDriver);
    const oracleJavaDownloadsPage: OracleJavaDownloadsPage = new OracleJavaDownloadsPage(webDriver);
    this.timeout(TC_TIMEOUT)

    before(async (): Promise<void> => {
        await oracleHomePage.openOraclePage()
        await oracleHomePage.pageElements.cookiesPopup.acceptAllCookies()
        await oracleHomePage.pageElements.languageSettingsPopup.closeLanguageSettingsPopup()
        await oracleHomePage.pageElements.navigationBar.chooseResourcesFromNavMenu()
        await oracleHomePage.pageElements.navigationBar.chooseJavaDownloadLink()
    })
    it(`Download size displayed on the page is less than ${EXPECTED_FILE_SIZE} MB.`, async (): Promise<void> => {

        const downloadFileSizes = await oracleJavaDownloadsPage.getFirstFileSize()
        expect(downloadFileSizes).to.lessThan(EXPECTED_FILE_SIZE, `File size should be less then ${EXPECTED_FILE_SIZE}`)
    })
    after(async (): Promise<void> => {
        await webDriver.closeBrowser()
    })

})