import { test, expect } from '@playwright/test';
import { MainPage } from '../../pages/MainPage';
import { ProductName } from '../../pages/modules/productsBar/ProductNameEnum';
import { createCustomPage } from '../../utils/customBrowserContext';

test('Example Test', async () => {
    const page = await createCustomPage();
    const mainPage = new MainPage(page);

    await mainPage.navigate();
    // await mainPage.clickOnProduct(ProductName.FLIGHTS)
    await mainPage.clickOnEachProduct(1000);
});