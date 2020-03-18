<template>
  <div id="mapid"></div>
</template>

<script>
export default {
  data() {
    return {
      token: process.env.VUE_APP_MAPBOX_ACCESS_TOKEN,
      latLng: [23.8759391,120.588669],
      zoom: 8,
      map: null,
      OSMUrl: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      center: [],
    }
  },
  watch: {
    center() {
      this.map.panTo(this.center, 16);
    }
  },
  mounted() {
    this.map = this.$utils.map.createMap('mapid');
    this.map.setView([23.8759391,120.588669], 16);
    this.$utils.map.createTileLayer(this.map, this.OSMUrl, { maxZoom: 18 });

    navigator.geolocation.getCurrentPosition((position) => {
      this.map.panTo([position.coords.latitude, position.coords.longitude]);
    });
  }
}

</script>

<style>
#mapid {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
}
</style>
