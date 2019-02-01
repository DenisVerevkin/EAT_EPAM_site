const browserConfig = require('../DATA/browser-config');

const getBrowser = (browserName = 'chrome', instances) =>{
    const browser = browserConfig[browserName];
    if (instances) {
        browser.maxInstances = instances;
        browser.shardTestFiles = true;
    };
    return browser;
};
module.exports = getBrowser;