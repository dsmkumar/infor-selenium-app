require('chromedriver');
const cases_1 = require('./test-cases/infor-sales-order-case/case-1');
const { Builder, By, Key, until } = require('selenium-webdriver');
const { login, inforCase, config } = require('./polyfills');
var driver = config.build(Builder);
driver.manage().window().maximize();
describe("XATTAX Automation", function() {
    it('XATTAX SAVE RECORD', async function(done) {
        new Promise(async function(resolve, reject) {
            await driver.get(config.appUrl)
            await driver.sleep(3000);
            await cases_1.salesOrderSave(driver, By, Key, until).then(function() {
                resolve('final');
            });
        }).then(function(result) {
            driver.quit();
        });
        done();
    })
});