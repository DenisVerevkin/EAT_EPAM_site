const browserConfig = require('../DATA/browser-config');

const getBrowser = (browserName = 'chrome', instances) =>{
    console.log(`${instances}: That's the INSTANCE! I can read it but I don't know how to use it`);
    const browser = browserConfig[browserName];
    if (instances) {
        browser.maxInstances = instances;
        browser.shardTestFiles = true;
    };
    console.log(browser);
    return browser;
};
module.exports = getBrowser;