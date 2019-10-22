/*
 * This File contains the Planetary Map Class
 */

// PlanetaryMap Class extends OL with custom Planetary realted functions ()
class PlanetaryMap extends ol.Map{
};
/*
class PlanetaryMap extends ol.Map{
  constructor(pTarget, pLayers, pView){
    super();
    this.target = pTarget;
    this.target_ = pTarget;
    this.layers = pLayers;
    this.view = pView;

    console.log(this.target);
    console.log(this.layers);
    console.log(this.view);
  }
}

/*
var planetaryMap = new PlanetaryMap({
  target: 'map',
  layers: baseLayers,
  view: new ol.View({
    //extent: extent,
    projection: projection,
    center: ol.proj.fromLonLat([37.41, 8.82]),
    zoom: 4
  })
});
planetaryMap.init();
*/
