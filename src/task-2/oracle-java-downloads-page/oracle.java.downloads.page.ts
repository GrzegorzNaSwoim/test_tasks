import {BrowserDriver} from "../driver-wrapper/custom.driver";
import {until, WebElement} from "selenium-webdriver";
import {OracleJavaDownloadsPageModel} from "./oracle-java-downloads-page-models/oracle.java.downloads.page.model";

export class OracleJavaDownloadsPage {
    public readonly javaDownloadsPageModel: OracleJavaDownloadsPageModel = new OracleJavaDownloadsPageModel;
    public driver: BrowserDriver;

    public constructor(webDriver: BrowserDriver) {
        this.driver = webDriver;
    }

    static async getFileSizeFromData(fileSize: WebElement): Promise<number> {
        let fileSizeAsNumber: number = 0;
        const fileSizeInMB: string = await fileSize.getText();
        if (fileSizeInMB.length > 0) {
            fileSizeAsNumber = parseFloat(fileSizeInMB.replace(' MB', ''));
        }
        return fileSizeAsNumber
    }

    public async getFirstFileSize(): Promise<number> {
        await this.driver.browserDriver.wait(until.titleIs(this.javaDownloadsPageModel.PAGE_TITLE),
            this.javaDownloadsPageModel.LOADING_TIMEOUT);
        const fileSize: WebElement = await this.driver.browserDriver.findElement(this.javaDownloadsPageModel
            .FIRST_DOWNLOAD_FILE_SIZE)
        return await OracleJavaDownloadsPage.getFileSizeFromData(fileSize);
    }

    /**
     * Method prepared for collecting all size in case searching values less than 100 mb in all displayed file sizes
     */
    public async collectFileSizes(): Promise<number[]> {
        await this.driver.browserDriver.wait(until.titleIs(this.javaDownloadsPageModel.PAGE_TITLE),
            this.javaDownloadsPageModel.LOADING_TIMEOUT);
        const downloadSizes: WebElement[] = await this.driver.browserDriver.findElements(this.javaDownloadsPageModel.FILE_SIZE_ELEMENTS)
        let filesSizes: number[] = [];
        for (let fileSize of downloadSizes) {
            const digitFileSize: number = await OracleJavaDownloadsPage.getFileSizeFromData(fileSize)
            filesSizes.push(digitFileSize);
        }
        return filesSizes;
    }
}








