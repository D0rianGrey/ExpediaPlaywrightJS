import { Page, Locator } from "@playwright/test";
import { createCustomPage } from "../utils/customBrowserContext";
import { ProductsBar } from "./modules/productsBar/ProductsBar";
import { ProductName } from "./modules/productsBar/ProductNameEnum";

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
        await productLocator.click();
    }

    async clickOnEachProduct(time?: number) {
        const delay = time ?? 0;
        for (const product of Object.values(ProductName)) {
            await this.clickOnProduct(product);
            await this.page.waitForTimeout(delay);
        }
    }

}