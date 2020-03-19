<template>
<div>
  <div id="mapid"></div>
</div>
</template>

<script>
export default {
  data() {
    return {
      map: null,
      OSMUrl: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    }
  },
  mounted() {
    this.getDataFromApi();
    this.map = this.$utils.map.createMap('mapid');
    this.map.setView([23.8759391,120.588669], 8);
    this.$utils.map.createTileLayer(this.map, this.OSMUrl, { maxZoom: 18 });

    navigator.geolocation.getCurrentPosition((position) => {
      this.map.setView([position.coords.latitude, position.coords.longitude], 16);
    });

    // let cluster = this.$utils.map.createMakerCluster();
    // for (let i = 0; i < this.coffee.length; i++) {
    //   let latlng = this.$utils.map.createLatlng(this.coffee[0].latitude, this.coffee[1].longitude);
    //   console.log(latlng);
    //   let maker = this.$utils.map.createMakerByLatlng(latlng);
    //   cluster.addLayer(maker);
    // }

    // this.map.addLayer(cluster);
  },
  methods: {
    getDataFromApi() {
      this.axios.get('cafes.json')
        .then(res => {
          this.addCluster(res.data);
        })
    },
    addCluster(data) {
      let cluster = this.$utils.map.createMakerCluster();

      for (let i = 0; i < data.length; i++) {
        let { latitude: lat, longitude: lng } = data[i];
        let latlng = this.$utils.map.createLatlng(parseFloat(lat), parseFloat[lng]);
        let maker = this.$utils.map.createMakerByLatlng(latlng);
        cluster.addLayer(maker);
      }
      this.map.addLayer(cluster);
    }
  }
}

</script>

<style>
#mapid {
  /* position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%; */
  height: 500px;
}
</style>
