import {By} from "selenium-webdriver";

export class OracleJavaDownloadsPageModel {
    public readonly LOADING_TIMEOUT: number = 2000;
    public readonly PAGE_TITLE: string = "Java Downloads | Oracle";
    public readonly FILE_SIZE_ELEMENTS: By = By.xpath('//*[contains(text()," MB")]');
    public readonly FIRST_DOWNLOAD_FILE_SIZE: By = By.xpath(
        '//div[@id="java17-linux"]//table[@class ="otable-w2"]//tr[1]//td[contains(text() ," MB")]')

}