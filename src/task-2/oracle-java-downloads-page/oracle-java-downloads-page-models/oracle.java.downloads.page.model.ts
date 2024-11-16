import {By} from "selenium-webdriver";

export class OracleJavaDownloadsPageModel{
    public LOADING_TIMEOUT: number = 2000;
    public PAGE_TITLE: string = "Java Downloads | Oracle";
    public FILE_SIZE_ELEMENTS: By = By.xpath('//*[contains(text()," MB")]');
    public FIRST_DOWNLOAD_FILE_SIZE: By = By.xpath(
        '//div[@id="java17-linux"]//table[@class ="otable-w2"]//tr[1]//td[contains(text() ," MB")]')
}