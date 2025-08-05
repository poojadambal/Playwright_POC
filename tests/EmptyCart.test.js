// tests/emptyCartTest.spec.js
const { test, expect } = require('@playwright/test');
import { HomePage } from '../pages/HomePage.js';
import { LoginPage } from '../pages/LoginPage.js';
import { CartPage } from '../pages/CartPage.js';

test('Verify that cart shows empty message when quantity is zero', async ({ page }) => {
  // Go to Home Page
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

  // Navigate to Books section
  const productPage = await homePage.clickCategory('BOOKS');


  // Select Product
  await productPage.selectProduct('Paper Towns by John Green');
 
  // Enter Quantity as 0
//   const quantityInput = page.locator('input[name="quantity"]'); // adjust selector
  await productPage.enterQuantity('0');
  await productPage.addToCart();
  await expect(cartPage.emptycartMessage).toBeVisible();
//   console.log(cartPage.emptycartMessage.getContent());
const messageText = await cartPage.emptycartMessage.textContent();

// Log the message text to console
console.log('Empty cart message:', messageText);

await expect(await page.screenshot({ fullPage: true })).toMatchSnapshot('empty-cart-page.png');


});
