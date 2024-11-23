import { test, expect } from '@playwright/test';
import { MainPage } from '../../pages/MainPage';
import { ProductName } from '../../pages/modules/productsBar/ProductNameEnum';

test('Successful opening main page', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.navigate();
    // await mainPage.clickOnProduct(ProductName.FLIGHTS)
    await mainPage.clickOnEachProduct(1000);
});
