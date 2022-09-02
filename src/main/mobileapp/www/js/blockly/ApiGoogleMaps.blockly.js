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
 * @since 02/09/2022 11:53:54
 *
 */
window.blockly.js.blockly.ApiGoogleMaps.ExecutarArgs = [];
window.blockly.js.blockly.ApiGoogleMaps.Executar = async function() {

  //
  if (!this.cronapi.maps.isInitialized("map3824")) {
    //
    this.cronapi.maps.init("map3824", 'roadmap', this.cronapi.maps.createLatLngPoint('-13.0193736', '-38.5480934'), '16', async function(sender_item) {
        item = sender_item;
      //
      (await this.blockly.js.blockly.ApiGoogleMaps.AutoCompletarSaida());
      //
      (await this.blockly.js.blockly.ApiGoogleMaps.AutoCompletarDestino());
      //
      (await this.blockly.js.blockly.ApiGoogleMaps.GerarRota());
      //
      (await this.blockly.js.blockly.ApiGoogleMaps.AdicionarMarcador());
    }.bind(this));
  }
}

/**
 * @function AutoCompletarSaida
 *
 * Descreva esta função...
 *
 *
 * @author Fábio Duarte Freitas
 * @since 02/09/2022 11:53:54
 *
 */
window.blockly.js.blockly.ApiGoogleMaps.AutoCompletarSaidaArgs = [];
window.blockly.js.blockly.ApiGoogleMaps.AutoCompletarSaida = async function() {

  //
  this.cronapi.maps.createAutoComplete("map3824", "crn-input2978", 'address', this.cronapi.maps.createLatLngBounds(this.cronapi.maps.createLatLngPoint('-13.0193736', '-38.5480934'), this.cronapi.maps.createLatLngPoint('-12.7513579', '-38.1534927')), 'true', '', async function(sender_item) {
      item = sender_item;
    //
    this.cronapi.screen.createScopeVariable('saida', item);
  }.bind(this));
}

/**
 * @function AutoCompletarDestino
 *
 * Descreva esta função...
 *
 *
 * @author Fábio Duarte Freitas
 * @since 02/09/2022 11:53:54
 *
 */
window.blockly.js.blockly.ApiGoogleMaps.AutoCompletarDestinoArgs = [];
window.blockly.js.blockly.ApiGoogleMaps.AutoCompletarDestino = async function() {

  //
  this.cronapi.maps.createAutoComplete("map3824", "crn-input921", 'address', this.cronapi.maps.createLatLngBounds(this.cronapi.maps.createLatLngPoint('-14.6518373', '-20.5490933'), this.cronapi.maps.createLatLngPoint('-12.754589', '-38.153545')), 'true', '', async function(sender_item) {
      item = sender_item;
    //
    this.cronapi.screen.createScopeVariable('destino', item);
  }.bind(this));
}

/**
 * @function GerarRota
 *
 * Descreva esta função...
 *
 *
 * @author Fábio Duarte Freitas
 * @since 02/09/2022 11:53:54
 *
 */
window.blockly.js.blockly.ApiGoogleMaps.GerarRotaArgs = [];
window.blockly.js.blockly.ApiGoogleMaps.GerarRota = async function() {

  //
  saida = this.cronapi.screen.getScopeVariable('saida');
  //
  destino = this.cronapi.screen.getScopeVariable('destino');
  //
  this.cronapi.maps.directionRoute(this.cronapi.maps.createRequestDirection(this.cronapi.maps.createLatLngPoint(this.cronapi.maps.getPropertyFromAutoComplete(saida, 'latitude'), this.cronapi.maps.getPropertyFromAutoComplete(saida, 'longitude')), this.cronapi.maps.createLatLngPoint(this.cronapi.maps.getPropertyFromAutoComplete(destino, 'latitude'), this.cronapi.maps.getPropertyFromAutoComplete(destino, 'longitude')), 'DRIVING', null), async function(sender_item) {
      item = sender_item;
    //
    this.cronapi.maps.drawRoute("map3824", item, '{\"preserveViewport\": false}\n', async function(sender_item) {
        item = sender_item;
    }.bind(this));
  }.bind(this));
}

/**
 * @function AdicionarMarcador
 *
 * Descreva esta função...
 *
 *
 * @author Fábio Duarte Freitas
 * @since 02/09/2022 11:53:54
 *
 */
window.blockly.js.blockly.ApiGoogleMaps.AdicionarMarcadorArgs = [];
window.blockly.js.blockly.ApiGoogleMaps.AdicionarMarcador = async function() {

  //
  this.cronapi.maps.createMarker("map3824", 'CronappId', 'Sede Cronapp', this.cronapi.maps.createLatLngPoint('-23.632725991744984', '-46.71215853068809'), 'src/main/mobileapp/www/assets/logo-cronapp.png', '<h2 style=\"text-align: center;\">Sede do Cronapp</h2', '');
}
