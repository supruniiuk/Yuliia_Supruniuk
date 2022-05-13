import { LoginForm } from "../../helpers/interfaces";

const { By } = require("selenium-webdriver");

const loginBtn = By.id("login2");
const usernameInput = By.id("loginusername");
const passwordInput = By.id("loginpassword");
const confirmLoginBtn = By.css("#logInModal .btn-primary");

export async function login(driver, userData: LoginForm) {
  await driver.findElement(loginBtn).click();

  await driver.findElement(usernameInput).sendKeys(userData.username);
  await driver.findElement(passwordInput).sendKeys(userData.password);
  await driver.findElement(confirmLoginBtn).click();
  await driver.sleep(3000);
}
