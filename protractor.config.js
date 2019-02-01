'use strict';
const path = require("path");
const yargs = require("yargs").argv;
const fs = require("fs");
const getBrowser = require("./UTILS/get_browser");

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    
    capabilities: getBrowser(yargs.b, yargs.i),
    SELENIUM_PROMISE_MANAGER: false,
    specs: [
        `./EGE/ege-spec.js`
    ],

    onPrepare: function () {
    },
    beforeLaunch: function () {
    },
    allScriptsTimeout: 300000,
    getPageTimeout: 30000,
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        isVerbose: true,
        realtimeFailure: true,
        includeStackTrace: true,
        defaultTimeoutInterval:30000
    }, 
    params: {
        timeout:90000
    },
};