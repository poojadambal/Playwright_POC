import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage.js';
import { LoginPage } from '../pages/LoginPage.js';
import { ProductPage } from '../pages/ProductPage.js';
import { CartPage } from '../pages/CartPage.js';

test('User can log in and submit an order', async ({ page }) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);
  //const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);

 await loginPage.goto()
  await loginPage.clickLoginOrRegister()
  await loginPage.login('dpooja', 'abc@abc');

await expect(loginPage.welcomeMessage).toBeVisible();
await expect(loginPage.welcomeMessage).toHaveText('Pooja');
  // Verify page title
  await expect(page).toHaveTitle('My Account');

  // const productPage = await homePage.clickMakeup();
  const productPage = await homePage.clickCategory('MAKEUP');
 // await homePage.clickMakeup();
  await productPage.selectProduct('Viva Glam Lipstick');
  await productPage.addToCart();

  // Checkout and confirm
  await cartPage.clickCheckout();
  await cartPage.confirmCheckout();

  // Assert order confirmation page
  // await page.waitForLoadState('networkidle');
  await expect(page).toHaveTitle('Your Order Has Been Processed!');
 
});