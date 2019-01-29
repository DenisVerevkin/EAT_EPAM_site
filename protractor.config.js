'use strict';
const path = require("path");
const yargs = require("yargs").argv;
const fs = require("fs");

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['disable-infobars', 'disable-gpu',
                'test-type=browser', 'disable-notifications', 'incognito',
                'disable-application-cache'],
            prefs: {
                download: {
                    'prompt_for_download': false,
                    'directory_upgrade': true,
                    'default_directory': "defaultDownloadsRoot"
                }
            }
        },
        shardTestFiles: false,
        maxInstances: 2,
    },
    SELENIUM_PROMISE_MANAGER: false,
    specs: [
        `./EET/eet-spec.js`
    ],

    onPrepare: function () {
    },
    beforeLaunch: function () {
    },
    allScriptsTimeout: 900000,
    getPageTimeout: 900000,
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        isVerbose: true,
        realtimeFailure: true,
        includeStackTrace: true,
        defaultTimeoutInterval:5000000
    }, 
    params: {
        timeout:90000
    },
};