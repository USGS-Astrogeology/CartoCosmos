var testLayer = myJSONmaps['targets'][142]["webmap"][0];
var testExtent = [testLayer["bounds"]["left"], testLayer["bounds"]["right"], testLayer["bounds"]["top"], testLayer["bounds"]["bottom"]];
var testProjection = testLayer["projection"];
var projection = "";

// North Polar Projection
var northPolarProjection = new ol.proj.Projection({
  code: 'EPSG:32661',
  //extent: [-2357032, -2357032, 2357032, 2357032],
  worldExtent: [0, 60, 360, 90],
  units: 'm'
})
ol.proj.addProjection(northPolarProjection);

// South Polar projection
var southPolarProjection = new ol.proj.Projection({
  code: 'EPSG:32761',
  //extent: [-2357032, -2357032, 2357032, 2357032],
  worldExtent: [0, -90, 360, -60],
  units: 'm'
})
ol.proj.addProjection(southPolarProjection);

switch(testProjection){
  case("cylindrical"):
    projection = "EPSG:4326";
    break;

  case("north-polar stereographic"):
    projection = "EPSG:32661";
    break;

  default:
    projection = "EPSG:32761";
    break;
}

baseLayers = [];

myLayers = new ol.layer.Tile({
  title: 'Mars',
  type: 'base',
  source: new ol.source.TileWMS({
    url: String(testLayer['url']) + '?map=' + String(testLayer['map']),
    params:{"LAYERS": String(testLayer["layer"])},
    serverType: 'mapserver',
    crossOrigin: 'anonymous'
  })
})
baseLayers.push(myLayers);


view = new ol.View({
    //extent: extent,
    projection: projection,
    center: ol.proj.fromLonLat([37.41, 8.82]),
    zoom: 4
});

var planetaryMap1 = new PlanetaryMap('map', baseLayers, view);
console.log(planetaryMap1);
