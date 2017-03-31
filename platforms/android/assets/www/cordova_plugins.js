cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-promise-polyfill.Promise",
        "file": "plugins/cordova-promise-polyfill/www/Promise.js",
        "pluginId": "cordova-promise-polyfill",
        "runs": true
    },
    {
        "id": "cordova-promise-polyfill.promise.min",
        "file": "plugins/cordova-promise-polyfill/www/promise.min.js",
        "pluginId": "cordova-promise-polyfill"
    },
    {
        "id": "cordova-plugin-admob-free.AdMob",
        "file": "plugins/cordova-plugin-admob-free/www/admob.js",
        "pluginId": "cordova-plugin-admob-free",
        "clobbers": [
            "admob",
            "AdMob",
            "plugins.AdMob"
        ]
    },
    {
        "id": "cordova-plugin-admob.AdMob",
        "file": "plugins/cordova-plugin-admob/www/AdMob.js",
        "pluginId": "cordova-plugin-admob",
        "clobbers": [
            "window.plugins.AdMob"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-admob-sdk": "0.6.0",
    "cordova-promise-polyfill": "0.0.2",
    "cordova-plugin-admob-free": "0.8.0",
    "cordova-plugin-whitelist": "1.3.2",
    "cordova-admobsdk": "1.0.4",
    "cordova-plugin-admob": "3.2.4"
};
// BOTTOM OF METADATA
});