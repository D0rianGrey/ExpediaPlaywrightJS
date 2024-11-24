import {test} from '../../utils/testFixtures';


test('Example Test', async ({mainPage}) => {
    await mainPage.navigate();
    // await mainPage.clickOnProduct(ProductName.FLIGHTS)
    await mainPage.verifyThatStaysIsSelectedByDefault();
    await mainPage.clickOnEachProduct();
});