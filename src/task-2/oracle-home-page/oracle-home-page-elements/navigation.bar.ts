import {NavigationBarModel} from "../oracle-home-page-models/oracle.home.page.model";
import {BrowserDriver} from "../../driver-wrapper/custom.driver";
import {until, WebElement} from "selenium-webdriver";

/**
 * Handles the interaction with the navigation bar of the Oracle Home Page.
 */
export class NavigationBar {
    navigationMenuModel: NavigationBarModel;
    driver: BrowserDriver;

    /**
     * Constructor for NavigationBar.
     * @param webdriver - The browser driver to interact with the page.
     * @param navigationBarModel - The model representing the navigation bar elements.
     */
    constructor(webdriver: BrowserDriver, navigationBarModel: NavigationBarModel) {
        this.driver = webdriver;
        this.navigationMenuModel = navigationBarModel;
    }

    /**
     * Selects the "Resources" option from the navigation menu.
     * This function finds the resources button in the navigation bar and clicks it.
     */
    async chooseResourcesFromNavMenu(): Promise<void> {
        const resourcesButton: WebElement = await this.driver.browserDriver.findElement(
            this.navigationMenuModel.RESOURCES_BUTTON);
        await resourcesButton.click();
    }

    /**
     * Selects the "Java Download" link from the resources submenu.
     * This function waits for the Java Download link to be visible, then clicks it.
     */
    async chooseJavaDownloadLink(): Promise<void> {
        const javaDownloadLink: WebElement = await this.driver.browserDriver.findElement(
            this.navigationMenuModel.resourcesSubMenu.JAVA_DOWNLOAD_LINK);
        await this.driver.browserDriver.wait(until.elementIsVisible(javaDownloadLink), 2000);
        await javaDownloadLink.click();
    }
}