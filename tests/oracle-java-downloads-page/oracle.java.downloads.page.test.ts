import {describe} from "mocha";
import {expect} from "chai";
import {BrowserDriver, BrowsersUnderTests} from "../../src/task-2/driver-wrapper/custom.driver";
import {OracleHomePage} from "../../src/task-2/oracle-home-page/oracle.home.page";
import {OracleJavaDownloadsPage} from "../../src/task-2/oracle-java-downloads-page/oracle.java.downloads.page";
import {WebDriver} from "selenium-webdriver";

const EXPECTED_FILE_SIZE: number = 100;
const TC_TIMEOUT: number = 2000000;
const browsersUnderTest: BrowsersUnderTests[] = [
    BrowsersUnderTests.Chrome,
    BrowsersUnderTests.Edge,
    BrowsersUnderTests.FireFox,
];

describe('Tests related to Oracle Java download page', function (): void {
    this.timeout(TC_TIMEOUT);

    it(`Download size displayed on the page is less than ${EXPECTED_FILE_SIZE} MB.`, async (): Promise<void> => {
        await Promise.all(
            browsersUnderTest.map(async (browser) => {
                const webDriver: WebDriver = new BrowserDriver().buildBrowserDriver(
                    browser,
                    ""
                );
                const oracleHomePage: OracleHomePage = new OracleHomePage(webDriver);
                const oracleJavaDownloadsPage: OracleJavaDownloadsPage = new OracleJavaDownloadsPage(webDriver);

                try {
                    await oracleHomePage.openOraclePage();
                    await oracleHomePage.pageElements.cookiesPopup.acceptAllCookies();
                    await oracleHomePage.pageElements.languageSettingsPopup.closeLanguageSettingsPopup();
                    await oracleHomePage.pageElements.navigationBar.selectResourcesFromNavMenu();
                    await oracleHomePage.pageElements.navigationBar.selectJavaDownloadLink();
                    const downloadFileSize = await oracleJavaDownloadsPage.getFirstFileSize();

                    expect(downloadFileSize).to.be.lessThan(
                        EXPECTED_FILE_SIZE,
                        `In ${browser} test failed due to file size exceeding ${EXPECTED_FILE_SIZE} MB.`
                    );
                } catch (err) {
                    console.error(`Error during test execution on ${browser}. Error message: ${err}`);
                } finally {
                    await webDriver.quit();
                }
            })
        );
    });
});