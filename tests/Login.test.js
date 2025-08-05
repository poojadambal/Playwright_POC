// tests/login.test.js
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';

test.describe('Positive TestCases',()=>{
test('login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto()
  await loginPage.clickLoginOrRegister()
  await loginPage.login('dpooja', 'abc@abc');

await expect(loginPage.welcomeMessage).toBeVisible();
await expect(loginPage.welcomeMessage).toHaveText('Pooja');
});
})

test.describe('Negative TestCases',()=>{
test('login with invalid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await page.getByRole('link', { name: 'Login or register' }).click();
  await loginPage.login('admin', 'wrongpass');
  await expect(page.locator('text=Error: Incorrect login or password provided.')).toBeVisible();
});


test('Login with empty fields', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await page.getByRole('link', { name: 'Login or register' }).click();
  await loginPage.login('', '');
  const errorMessageLocator = page.locator("//div[@class='alert alert-error alert-danger']");
  const actualErrorText = await errorMessageLocator.textContent();
  await expect(errorMessageLocator).toBeVisible();
  await expect(errorMessageLocator).toContainText('Error: Incorrect login or password provided.');
  await expect(page).not.toHaveTitle('My Account');

  console.log('Actual error message:', actualErrorText?.trim());
});

})

