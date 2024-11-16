import {BrowserDriver} from "../driver-wrapper/custom.driver";
import {until, WebElement} from "selenium-webdriver";
import {OracleJavaDownloadsPageModel} from "./oracle-java-downloads-page-models/oracle.java.downloads.page.model";

export class OracleJavaDownloadsPage {
    public javaDownloadsPageModel: OracleJavaDownloadsPageModel = new OracleJavaDownloadsPageModel;
    public driver: BrowserDriver;

    constructor(webDriver: BrowserDriver) {
        this.driver = webDriver;
    }

    static async _getFileSizeFromData(fileSize: WebElement): Promise<number> {
        let fileSizeAsNumber: number = 0;
        let textElement: string = await fileSize.getText();
        if (textElement.length > 0) {
            fileSizeAsNumber = parseFloat(textElement.replace(' MB', ''));
        }
        return fileSizeAsNumber
    }

    public async getFirstFileSize(): Promise<number> {
        await this.driver.browserDriver.wait(until.titleIs(this.javaDownloadsPageModel.PAGE_TITLE),
            this.javaDownloadsPageModel.LOADING_TIMEOUT);
        const fileSize: WebElement = await this.driver.browserDriver.findElement(this.javaDownloadsPageModel
            .FIRST_DOWNLOAD_FILE_SIZE)
        return await OracleJavaDownloadsPage._getFileSizeFromData(fileSize);
    }

    public async collectFileSizes(): Promise<number[]> {
        await this.driver.browserDriver.wait(until.titleIs(this.javaDownloadsPageModel.PAGE_TITLE),
            this.javaDownloadsPageModel.LOADING_TIMEOUT);
        let downloadSizes: WebElement[] = await this.driver.browserDriver.findElements(this.javaDownloadsPageModel.FILE_SIZE_ELEMENTS)
        let filesSizes: number[] = [];
        for (let fileSize of downloadSizes) {
            let digitFileSize: number = await OracleJavaDownloadsPage._getFileSizeFromData(fileSize)
            filesSizes.push(digitFileSize);
        }
        return filesSizes;
    }
}








