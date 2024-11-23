import { Page, Locator } from '@playwright/test';
import { ProductName } from './ProductNameEnum';

export class ProductsBar {

    readonly page: Page;
    readonly allProducts: Locator;

    constructor(page: Page) {
        this.page = page;
        this.allProducts = page.locator('div#multi-product-search-form-1 ul li[role="presentation"]');
    }

    getProductByName(productName: ProductName): Locator {
        return this.allProducts.filter({ hasText: productName });
    }
}