'use strict';

const world = require('../PO/world');
const logger = require('./logger');

/**
* Returns expected condition by provided key
* @param element - element
* @param validation - key
* @param negate - negate flag
* @return {Condition}
*/
const ECHelper = (element, validation, negate) => {

    const EC = protractor.ExpectedConditions;

    switch (validation) {
        case "present": return negate ? EC.not(EC.presenceOf(element)) : EC.presenceOf(element);
        case "clickable": return negate ? EC.not(EC.elementToBeClickable(element)) : EC.elementToBeClickable(element);
        case "visible": return negate ? EC.not(EC.visibilityOf(element)) : EC.visibilityOf(element);
        case "invisible": return negate ? EC.not(EC.invisibilityOf(element)) : EC.invisibilityOf(element);
        case "selected": return negate ? EC.not(EC.elementToBeSelected(element)) : EC.elementToBeSelected(element);
        case "gone": return negate ? EC.not(EC.stalenessOf(element)) : EC.stalenessOf(element);
        case "appear": return EC.presenceOf(element);
        case "disappear": return EC.stalenessOf(element);
        case "become visible": return EC.visibilityOf(element);
        case "become invisible": return EC.invisibilityOf(element);
        default: throw new Error("Wrong expected condition provided");
    }
};


const openBrowser = async (url) => {

    logger.info(`Trying to open ${url}`);
    
    browser.ignoreSynchronization = true;

    await browser.driver.manage().window().maximize();
    await browser.get(url);

    await browser.wait(ECHelper(element(by.css(world.start.logo)), "visible"), browser.params.timeout, "Logo is missing");
    logger.info(`Success`);
    logger.error(`No error with ${url}`);
};


const checkListData = (expectedDropdown, actualDropdown) => {

    if(expectedDropdown.length === actualDropdown.length) {
        expectedDropdown.forEach((text) => {
            expect(actualDropdown.indexOf(text)).not.toBeLessThan(0, `${text} not found`);
        });
    };
};



module.exports = {
    ECHelper,
    openBrowser,
    checkListData
}