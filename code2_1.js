function initialize() {
    if (GBrowserIsCompatible()) {
        var map = new GMap2(document.getElementById("map_canvas"));
        map.setCenter(new GLatLng(34.98655, 135.75531), 13);

        var copyrights = new GCopyrightCollection();
        var tilelayer = new GTileLayer(copyrights, 0, 19);

        tilelayer.getTileUrl = function (tile, zoom) { return "sample.png"; };
        tilelayer.isPng = function () { return true; };
        tilelayer.getOpacity = function () { return 0.3; };

        var tileoverlay = new GTileLayerOverlay(tilelayer);

        map.addOverlay(tileoverlay);
    }
}