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
    center: Object,
    zoom: Number,
    pins: Array,
  },
})
export default class LeafletMapComponent extends Vue {
  center!: LocationPinModel;
  zoom!: number;
  pins!: LocationPinModel[];
  mymap?: leaflet.Map;

  // mounted lifecycle hook, creates the map
  mounted(): void {
    this.setupMap();
    this.addPinsToMap();
  }

  updated(): void {
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
        .setView(
          [this.center.coordinates[0], this.center.coordinates[1]],
          this.zoom
        );
      leaflet
        .tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        })
        .addTo(this.mymap);
    }
  }
}


import component from "*.vue";
import {onMounted, PropType} from "vue";
import {DatePickerModel} from "@/model/DatePickerModel";

// export default {
//   props: {
//     center: {
//       type: Object as PropType<LocationPinModel>,
//           required: true,
//     },
//     zoom: Number,
//     pins: Array as PropType<LocationPinModel[]>
//   },
//   setup(props) {
//     let mymap?: leaflet.Map = undefined
//
//     onMounted(() => {
//       setupMap()
//       addPinsToMap
//     })
//
//
//      const addPinsToMap= ()=> {
//     props.pins.forEach((element) => {
//       console.log(element);
//       if (this.mymap)
//         leaflet
//           .marker([element.coordinates[0], element.coordinates[1]])
//           .addTo(this.mymap)
//           .bindPopup(
//             "<a href='/productDetail?id=" +
//               element.productId +
//               "'>" +
//               element.name +
//               "</a>"
//           )
//           .openPopup();
//     });
//   }
//
//   const setupMap=()=> {
//     if (this.center && this.zoom) {
//       this.mymap = leaflet
//         .map("mapid")
//         .setView(
//           [this.center.coordinates[0], this.center.coordinates[1]],
//           this.zoom
//         );
//       leaflet
//         .tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//           attribution:
//             '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//         })
//         .addTo(this.mymap);
//     }
//   }
//   }
// }

</script>


