<template>
  <div class="flex flex-col h-full">
    <!-- Map -->
    <div id="mapid" class="h-full z-0 rounded-3xl"></div>
  </div>
</template>

<script lang="ts">
import leaflet from "leaflet";
import { Options, Vue } from "vue-class-component";
import { LocationPinModel } from "@/model/LocationPinModel";

@Options({
  props: {
    center: Array,
    zoom: Number,
    pins: Array,
    name: String,
  },
})
export default class LeafletMapComponent extends Vue {
  center!: number[];
  zoom!: number;
  name!: string;
  pins!: LocationPinModel[];
  mymap?: leaflet.Map;

  // mounted lifecycle hook, creates the map
  mounted(): void {
    this.setupMap();
    this.addPinsToMap();
    // this.mymap.on("click", (e: any) => {
    //   leaflet
    //     .popup()
    //     .setLatLng(e.latlng)
    //     .setContent("You clicked the map at " + e.latlng.toString())
    //     .openOn(this.mymap!);
    // });
  }

  updated(): void {
    console.log("Update things");
    this.addPinsToMap();
  }

  addPinsToMap(): void {
    this.pins.forEach((element) => {
      console.log(element);
      if (this.mymap)
        leaflet
          .marker([element.coordinates[0], element.coordinates[1]])
          .addTo(this.mymap)
          .bindPopup(
            "<a href='/productDetail?id=" +
              element.productId +
              "'>" +
              element.name +
              "</a>"
          )
          .openPopup();
    });
  }

  setupMap(): void {
    if (this.center && this.zoom) {
      this.mymap = leaflet
        .map("mapid")
        .setView([this.center[0], this.center[1]], this.zoom);
      leaflet
        .tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        })
        .addTo(this.mymap);
    }
  }
}
</script>
