exports.config = {
    tests    : './tests/*_test.js',
    output   : './output',
    helpers  : {
        WebDriver: {
            url        : 'http://new.bmc.hibridmena.com',
            driver     : 'local',
            browser    : 'chrome',
            // desiredCapabilities: {
            //     chromeOptions: {
            //         args: ["--headless", "--disable-gpu", "--window-size=1920,1080"]
            //     }
            // },
            restart    : false,
            windowSize : '1920 x 1080',
            smartWait  : 5000,
            port       : 4444,
            rootElement: 'body',
            show       : true
        }
    },
    include  : {
        I           : './steps_file.js',
        loginPage   : './pages/login.js',
        homePage    : './pages/home.js',
        profilePage : './pages/profile.js',
        helper      : './pages/_helper.js',
        elementsPage: './pages/elements.js',
    },
    multiple : {
        basic   : {
            browsers: [
                'chrome',
                'firefox',
                'edge'
            ]
        },
        parallel: {
            chunks  : 2,
            browsers: [
                'chrome',
                'firefox'
            ]
        }
    },
    bootstrap: null,
    mocha    : {},
    timeout  : 10000,
    firstName: 'bmc-codeceptjs'
}