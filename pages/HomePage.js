import { ProductPage } from './ProductPage.js';
export class HomePage {
  constructor(page) {
    this.page = page;
    this.makeupCategory = page.getByRole('link', { name: 'MAKEUP' });
  }

  async goto() {
    await this.page.goto('https://automationteststore.com/');
  }

  async clickMakeup() {
    await this.makeupCategory.click();
    return new (await import('./ProductPage.js')).ProductPage(this.page);
  }
  
  async clickCategory(categoryName) {
    // await this.page.locator(`a[title="${categoryName}"]`).click();
await this.page.getByRole('link', { name: categoryName }).click();
return new ProductPage(this.page);
        // return new (await import('./ProductPage.js')).ProductPage(this.page);

}
}
