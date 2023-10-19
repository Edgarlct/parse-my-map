import L, {LatLngExpression} from "leaflet";

export function getPolyline(bounds: {lat:string, lon:string}[], map: L.Map)
{
  // generate lat and lon arrays
  // if lat or lon is undefined, set to 0 (is guinea golf)
  // filter out 0,0
  const latLons = bounds.map((item) => {
    if (item.lat === undefined || item.lon === undefined) {
      return [0, 0];
    }
    return [parseFloat(item.lat), parseFloat(item.lon)];
  }).filter((item) => {
    return item[0] !== 0 && item[1] !== 0;
  });

  // draw polyline
  const polyline = L.polyline((latLons as LatLngExpression[]), {color: 'blue'}).addTo(map);
  // zoom the map to the polyline
  map.fitBounds(polyline.getBounds());
}
