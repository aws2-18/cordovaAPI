cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-promise-polyfill/www/Promise.js",
        "id": "cordova-promise-polyfill.Promise",
        "pluginId": "cordova-promise-polyfill",
        "runs": true
    },
    {
        "file": "plugins/cordova-promise-polyfill/www/promise.min.js",
        "id": "cordova-promise-polyfill.promise.min",
        "pluginId": "cordova-promise-polyfill"
    },
    {
        "file": "plugins/cordova-plugin-admob-free/www/admob.js",
        "id": "cordova-plugin-admob-free.AdMob",
        "pluginId": "cordova-plugin-admob-free",
        "clobbers": [
            "admob",
            "AdMob",
            "plugins.AdMob"
        ]
    },
    {
        "file": "plugins/cordova-plugin-admob/www/AdMob.js",
        "id": "cordova-plugin-admob.AdMob",
        "pluginId": "cordova-plugin-admob",
        "clobbers": [
            "window.plugins.AdMob"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-promise-polyfill": "0.0.2",
    "cordova-admob-sdk": "0.6.0",
    "cordova-plugin-admob-free": "0.8.0",
    "cordova-plugin-whitelist": "1.3.2",
    "cordova-admobsdk": "1.0.4",
    "cordova-plugin-admob": "3.2.4"
}
// BOTTOM OF METADATA
});