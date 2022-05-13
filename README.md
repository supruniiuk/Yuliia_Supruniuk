# Yuliia_Supruniuk / WebUI

Test script for https://www.demoblaze.com/

Checking steps:
1. Click on **Log in** and enter the _Login_ and _Password_ of your user -> press the **Log in** button
2. Select category **Laptops**
3. Choose **Dell i7 8gb**
4. Press the **Add to cart** button
5. Go to **Cart** and click **Place Order**
6. Fill in the _Name, Country, City, Credit card, Month, Year_ fields and click the **Purchase** button
7. Reverse what the pop-up **'Thank you for your purchase!'**

### How to run test?
Before running make sure you install Selenium WebDriver
```
git clone https://github.com/supruniiuk/Yuliia_Supruniuk.git
cd Yuliia_Supruniuk
git checkout WebUI
npm install
npm test
```