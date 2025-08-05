export class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('#loginFrm_loginname');   
    this.passwordInput = page.locator('#loginFrm_password');
    this.loginButton = page.locator("button[title='Login']");
    this.welcomeMessage = page.locator("//span[@class='subtext']");
  }

  async goto() {
    await this.page.goto('https://automationteststore.com/');
  }

  async clickLoginOrRegister() {
  const loginLink = this.page.getByRole('link', { name: 'Login or register' });
  await loginLink.click();
}

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
