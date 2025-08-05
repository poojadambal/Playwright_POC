export class ProductPage {
  constructor(page) {
    this.page = page;
    this.quantityInput = page.locator('input[name="quantity"]'); // adjust selector accordingly

  }

 async selectProduct(productName) {
  // Click category by exact text using XPath (fixed syntax)
  await this.page.locator(`a[title="${productName}"]`).click();
 }
   async enterQuantity(quant) {
await this.quantityInput.fill(quant);

  

 }

  async addToCart() {
    await this.page.locator('a:has-text("Add to Cart")').click();

  }
}
