var actoins = require('../../utility/action');
module.exports = {
    salesOrderSave: async function(driver, By, Key, until) {
        await actoins.click(driver, By.xpath('//*[@id="dlg-alert-button-0"]'), 2);
        await actoins.click(driver, By.xpath('//*[@id="appnav-item-mtdsls0000m000-label"]'), 2);
        await actoins.click(driver, By.id('appnav-item-mtdsls0000m000-menu-mtdsls6000m000-label'), 2);
        await actoins.click(driver, By.id('appnav-item-mtdsls0000m000-menu-mtdsls6000m000-mtdsls6001m000-label'), 2);
        await driver.takeScreenshot().then(function(image, err) {
            require('fs').writeFile('./screenshot/case-1/open-menu-detail.png', image, 'base64', function(err) {});
        });
        await actoins.click(driver, By.id('appnav-item-mtdsls0000m000-menu-mtdsls6000m000-mtdsls6001m000-tdsls4100m000-label'), 2);
    },
    salesQuotation: async function(driver, By, Key, until) {

    }
}