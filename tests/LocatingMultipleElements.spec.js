import { test } from '@playwright/test';

test('locatemultipleelements', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/index.html');

    await page.waitForSelector("//div[@id='tbodyid']//div//h4/a");

    const Products = page.locator("//div[@id='tbodyid']//div//h4/a");

    const productList = await Products.all();

    for (const product of productList) {
        const productName = await product.textContent();
        console.log(productName);
    }

});