import { test } from '../../utils/testFixtures';
import { ProductName } from '../../pages/modules/productsBar/ProductNameEnum';


test('Example Test', async ({ mainPage }) => {
    await mainPage.navigate();
    // await mainPage.clickOnProduct(ProductName.FLIGHTS)
    await mainPage.clickOnEachProduct();
});