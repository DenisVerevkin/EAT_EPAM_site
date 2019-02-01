module.exports = {
    chrome: {
    'browserName': 'chrome',
        'chromeOptions': {
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
        }
    },

    firefox: {
        'browserName': 'firefox',
        'moz:firefoxOptions': {
            'args': ['--safe-mode']
        }
    }    
}
