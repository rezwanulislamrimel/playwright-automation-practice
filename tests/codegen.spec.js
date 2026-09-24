import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();

  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('Rimel');
  
  await page.locator('#loginpassword').fill('Test@1234');
  await page.locator('#loginpassword').press('Enter');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByText('PRODUCT STORE Home (current)').click();
  await page.getByRole('link', { name: 'Welcome Rimel' }).click();
});