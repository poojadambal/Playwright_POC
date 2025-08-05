export class CartPage {
  constructor(page) {
    this.page = page;
    this.checkoutBtn = page.locator('#cart_checkout1');
    this.confirmOrderBtn = page.locator('#checkout_btn');
    this.emptycartMessage=page.locator('text=Your shopping cart is empty!');


    //#checkout_btn
  }

  async clickCheckout() {
    await this.checkoutBtn.click();
  }
   

  async confirmCheckout() {
    //  await this.confirmOrderBtn.scrollIntoViewIfNeeded();
    await this.confirmOrderBtn.click();
  }
}
