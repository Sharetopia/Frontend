<template>
  <div class="card p-8 max-w-2xl flex flex-col bg-white">
    <h1>Inserat bearbeiten</h1>
    <div class="flex flex-col my-8">
      <div class="flex">
        <h2 class="w-1/3 p-3 font-bold">Titel</h2>
        <input
          type="text"
          placeholder="Name"
          class="border rounded-t-2xl w-2/3 p-3"
          v-model="$props.productModel.title"
        />
      </div>
      <div class="flex">
        <h2 class="w-1/3 p-3 font-bold">Tags</h2>
        <input
          type="text"
          placeholder="Schlagwörter mit Komma trennen"
          class="border w-2/3 p-3"
          v-model="$props.productModel.tags"
        />
      </div>
      <div class="flex">
        <h2 class="w-1/3 p-3 font-bold">Preis</h2>
        <input
          type="text"
          placeholder="€/Tag"
          class="border w-2/3 p-3"
          v-model="$props.productModel.price"
        />
      </div>
      <div class="flex">
        <h2 class="w-1/3 p-3 font-bold">Straße, Hausnummer</h2>
        <input
          type="text"
          placeholder="Straße, Hausnummer"
          class="border w-2/3 p-3"
          v-model="$props.productModel.address.street"
        />
      </div>
      <div class="flex">
        <h2 class="w-1/3 p-3 font-bold">Stadt</h2>
        <input
          type="text"
          placeholder="Stadt"
          class="border w-2/3 p-3"
          v-model="$props.productModel.address.city"
        />
      </div>
      <div class="flex">
        <h2 class="w-1/3 p-3 font-bold">PLZ</h2>
        <input
          type="text"
          placeholder="PLZ"
          class="border w-2/3 p-3"
          v-model="$props.productModel.address.zip"
        />
      </div>
      <div class="flex">
        <h2 class="w-1/3 p-3 font-bold">Beschreibung</h2>
        <input
          type="text"
          placeholder="Freitext"
          class="border rounded-b-2xl w-2/3 p-3"
          v-model="$props.productModel.description"
        />
      </div>
    </div>

    <input ref="fileInput" type="file" @input="pickFile" />
    <img v-if="previewImage" :src="previewImage" alt="" />
  </div>
</template>

<script lang="ts">
// import { Options, Vue } from "vue-class-component";
import { ProductModel } from "@/model/ProductModel";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    productModel: {
      type: Object as PropType<ProductModel>,
      required: true,
    },
  },
  data() {
    let previewImage: any = null;
    return {
      test: true,
      previewImage: previewImage,
    };
  },
  methods: {
    pickFile(): void {
      let input: any = this.$refs.fileInput;
      let file = input.files;
      if (file && file[0]) {
        let reader = new FileReader();
        reader.readAsDataURL(file[0]);
        reader.onload = (e) => {
          this.test = false;
          this.previewImage = e.target!.result;
          this.test = true;
        };
      }
    },
  },
});
</script>
