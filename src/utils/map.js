import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import "leaflet.markercluster";
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from'leaflet/dist/images/marker-shadow.png';

const defaultIcon = new L.icon({
  iconUrl: icon,
  iconShadow: iconShadow,
});
L.Marker.prototype.options.icon = defaultIcon;

const locations = [
  {
    name: 'ikea',
    lat: 23.872842,
    lng: 120.5886182,
  },
  {
    name: 'costco',
    lat: 22.6558574,
    lng: 120.3050515,
  }
]

const createMap = (divId, options) => {
  let map = L.map(divId, options);
  return map;
};

const createTileLayer = (map, url, options) => {
  let tileLayer = L.tileLayer(url, options);
  tileLayer.addTo(map);
}

const createMakerCluster = () => {
  return L.markerClusterGroup();
};

const getRandomLatLng = map => {
  let bounds = map.getBounds(),
    southWest = bounds.getSouthWest(),
    northEast = bounds.getNorthEast(),
    lngSpan = northEast.lng - southWest.lng,
    latSpan = northEast.lat - southWest.lat;

  return L.latLng(
    southWest.lat + latSpan * Math.random(),
    southWest.lng + lngSpan * Math.random()
  );
};

const createMakerByLatlng = (latlng, options) => {
  return L.marker(latlng, options);
};

const createLatlng = (location) => {
  return L.latLng(location[0], location[1]);
}

const createMarkerLayer = (map) => {
  const marker = new L.markerClusterGroup().addTo(map);
  for (var data in locations) {
    marker.addLayer([data.lat, data.lng]);
  }
  return marker;
}

export default {
  createMap,
  createTileLayer,
  createMarkerLayer,
  createMakerCluster,
  createLatlng,
  getRandomLatLng,
  createMakerByLatlng,
};
