import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const createMap = (divId, options) => {
  let map = L.map(divId, options);
  return map;
};

const createTileLayer = (map, url, options) => {
  let tileLayer = L.tileLayer(url, options);
  tileLayer.addTo(map);
}

export default {
  createMap,
  createTileLayer,
};
