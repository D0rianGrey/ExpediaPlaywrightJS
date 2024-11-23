import { Page, Locator, expect } from "@playwright/test";
import { createCustomPage } from "../utils/customBrowserContext";
import { ProductsBar } from "./modules/productsBar/ProductsBar";
import { ProductName } from "./modules/productsBar/ProductNameEnum";
import { clickElement } from '../utils/wrapperBasicActions';
import { logInfo, logSuccess, logError, logAction } from '../utils/log';

export class MainPage {

    readonly page: Page;
    readonly productsBar: ProductsBar;

    constructor(page: Page) {
        this.page = page;
        this.productsBar = new ProductsBar(page);
    }

    static async create(): Promise<MainPage> {
        const page = await createCustomPage();
        return new MainPage(page);
    }

    async navigate() {
        await this.page.goto('/');
    }

    async clickOnProduct(productName: ProductName) {
        const productLocator = this.productsBar.getProductByName(productName);
        await clickElement(productLocator, productName)
    }

    async verifyThatProductIsActive(productName: ProductName) {
        const stays = this.productsBar.getProductByName(productName);
        expect(await stays.getAttribute('data-stid')).toContain('active')
        logSuccess(`'${productName}' product is active`)
    }

    async verifyThatStaysIsSelectedByDefault() {
        this.verifyThatProductIsActive(ProductName.STAYS)

    }

    async clickOnEachProduct(time?: number) {
        const delay = time ?? 0;
        for (const product of Object.values(ProductName)) {
            await this.clickOnProduct(product);
            this.verifyThatProductIsActive(product)
            await this.page.waitForTimeout(delay);
        }
    }
}