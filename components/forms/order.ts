import { PlaceOrder } from "../../helpers/interfaces";

const { By } = require("selenium-webdriver");

const nameInput = By.id("name");
const countryInput = By.id("country");
const cityInput = By.id("city");
const cardInput = By.id("card");
const monthInput = By.id("month");
const yearInput = By.id("year");

const confirmBtn = By.xpath("//button[contains(text(),'Purchase')]");

export async function placeOrder(driver, order: PlaceOrder) {
  await driver.findElement(nameInput).sendKeys(order.name);
  await driver.findElement(countryInput).sendKeys(order.country);
  await driver.findElement(cityInput).sendKeys(order.city);
  await driver.findElement(cardInput).sendKeys(order.creditCard);
  await driver.findElement(monthInput).sendKeys(order.month);
  await driver.findElement(yearInput).sendKeys(order.year);

  await driver.findElement(confirmBtn).click();
}
