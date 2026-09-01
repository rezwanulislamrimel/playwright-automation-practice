import { test, expect } from '@playwright/test';

test('Locators', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/index.html');

    // Login button
    await page.click('id=login2');

    // Username
    await page.fill('#loginusername', 'Rimel');

    // Password
    await page.fill("input[id='loginpassword']", 'Test@123');

    // Login button
    await page.click('button[onclick="logIn()"]');

    // Logout link
    const logOutLink = page.locator('a#logout2');

    await expect(logOutLink).toBeVisible();

    await page.close();
});