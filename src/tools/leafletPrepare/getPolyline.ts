import L, {LatLngExpression} from "leaflet";

export function getPolyline(bounds: {lat:string, lon:string}[], map: L.Map)
{
  let latLons = bounds.map((item) => {
    if (item.lat === undefined || item.lon === undefined) {
      return [0, 0];
    }
    return [parseFloat(item.lat), parseFloat(item.lon)];
  }).filter((item) => {
    return item[0] !== 0 && item[1] !== 0;
  });

  let polyline = L.polyline((latLons as LatLngExpression[]), {color: 'blue'}).addTo(map);
  map.fitBounds(polyline.getBounds());
}
