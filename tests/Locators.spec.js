import { test, expect } from '@playwright/test';

test('Locators', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/index.html');

    // Login button
    await page.click('#login2');

    // Username
    await page.fill('#loginusername', 'Rimel');

    // Password
    await page.fill('#loginpassword', 'Test@123');

    // Login
    await page.click('button[onclick="logIn()"]');

    // Verify login was successful
    const logOutLink = page.locator('#logout2');
    await expect(logOutLink).toBeVisible({ timeout: 15000 });

    await page.close();
});