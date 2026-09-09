const { test, expect } = require('@playwright/test');

test('locators builtin', async ({ page }) => {

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        { waitUntil: 'domcontentloaded', timeout: 60000 }
    );

    const logo = page.getByAltText('company-branding');
    await expect(logo).toBeVisible();

    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');

    await page.getByRole('button', { name: 'Login' }).click();
});