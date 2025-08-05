import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import loginData from './data/LoginDetails.json' assert { type: 'json' };
test.describe('Login - Data Driven', () => {
  for (const data of loginData) {
    test(`Login test for user: ${data.username}`, async ({ page }) => {
      const loginPage = new LoginPage(page);
      await loginPage.goto();
      await loginPage.clickLoginOrRegister();
      await loginPage.login(data.username, data.password);

      if((await page.title()) === 'My Account') {
        await expect(loginPage.welcomeMessage).toBeVisible();
        await expect(page).toHaveTitle('My Account');
        const text = await loginPage.welcomeMessage.textContent();
        console.log(`Success: Welcome message = ${text?.trim()}`);
      } else {
        const errorLocator = page.locator("//div[contains(@class,'alert-danger')]");
        await expect(errorLocator).toBeVisible();
        await expect(errorLocator).toContainText('Error: Incorrect login or password provided.');
        await expect(page).not.toHaveTitle('My Account');
        const errText = await errorLocator.textContent();
        console.log(` Failure: Error message = ${errText?.trim()}`);
      }
    });
  }
});
