<template>
  <div class="flex flex-col h-full">
    <!-- Map -->
    <div id="mapid" class="h-full z-0 rounded-3xl"></div>
  </div>
</template>

<script lang="ts">
import leaflet from "leaflet";
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    coordinates: Array,
    name: String,
  },
})
export default class LeafletMapComponent extends Vue {
  coordinates!: number[];
  name!: string;
  mymap?: leaflet.Map;

  // mounted lifecycle hook, creates the map
  mounted(): void {
    this.mymap = leaflet.map("mapid").setView([48.9471455, 9.4341813], 15);
    leaflet
      .tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      })
      .addTo(this.mymap);

    leaflet
      .marker([this.coordinates[0], this.coordinates[1]])
      .addTo(this.mymap)
      .bindPopup(this.name)
      .openPopup();

    // this.mymap.on("click", (e: any) => {
    //   leaflet
    //     .popup()
    //     .setLatLng(e.latlng)
    //     .setContent("You clicked the map at " + e.latlng.toString())
    //     .openOn(this.mymap!);
    // });
  }
}
</script>
