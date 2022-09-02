window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.ApiGoogleMaps = window.blockly.js.blockly.ApiGoogleMaps || {};

/**
 * @function Executar
 *
 * ApiGoogleMaps
 *
 *
 * @author Fábio Duarte Freitas
 * @since 31/08/2022 11:03:29
 *
 */
window.blockly.js.blockly.ApiGoogleMaps.ExecutarArgs = [];
window.blockly.js.blockly.ApiGoogleMaps.Executar = async function() {
 var item;
  //
  if (!this.cronapi.maps.isInitialized("map2740")) {
    //
    this.cronapi.maps.init("map2740", 'roadmap', this.cronapi.maps.createLatLngPoint('-13.0193736', '-38.5480934'), '16', async function(sender_item) {
        item = sender_item;
    }.bind(this));
  }
}
