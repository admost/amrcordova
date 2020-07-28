cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-amr.Amr",
      "file": "plugins/cordova-plugin-amr/www/Amr.js",
      "pluginId": "cordova-plugin-amr",
      "clobbers": [
        "window.plugins.Amr"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-amr": "1.2.9"
  };
});