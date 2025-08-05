const { test, expect } = require('@playwright/test');
import { HomePage } from '../pages/HomePage.js';
import { LoginPage } from '../pages/LoginPage.js';
import { CartPage } from '../pages/CartPage.js';

test('check order', async ({ page }) => {
  // Go to Home Page
   const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    //const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);
  
   await loginPage.goto();
   await page.hover('text="Account"');
   await page.click('text="Check Your Order"');
   await page.fill('#CheckOrderFrm_order_id',"59011");
    await page.fill('#CheckOrderFrm_email',"p@gmail.com");
//   await page.click("button[title='Continue']");
 await page.click('text="Continue"');
//  await expect(page.locator('.maintext')).toHaveText('Order Details');
  await expect(page.locator('text=Order Details')).toBeVisible();
await expect(page.locator('//tbody/tr/td[2]/address[1]')).toHaveText('Pooja Dambalabcabcabcabc 580024KarnatakaIndia');


   });
