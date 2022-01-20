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
      <div class="flex mt-10">
        <h2 class="w-1/3 p-3 font-bold">Bilder</h2>
        <div>
          <div class="mb-4">
            <img
              v-if="previewImage"
              :src="previewImage"
              alt="previewimage"
              class="w-24 h-24 rounded-xl"
            />
          </div>
          <input ref="fileInput" type="file" @input="pickFile" />
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <div class="w-2/3 flex">
        <PrimaryButton title="Speichern" class="flex-1" @click="submit()" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// import { Options, Vue } from "vue-class-component";
import { ProductModel } from "@/model/ProductModel";
import { defineComponent, PropType } from "vue";
import PrimaryButton from "@/uiElements/PrimaryButton.vue";
import { Storage, Auth } from "aws-amplify";

export default defineComponent({
  components: {
    PrimaryButton,
  },
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
    async pickFile(): Promise<void> {
      let input: any = this.$refs.fileInput;
      let file = input.files;
      if (file && file[0]) {
        let reader = new FileReader();
        reader.readAsDataURL(file[0]);
        reader.onload = (e) => {
          this.previewImage = e.target?.result;
        };
        const result = await Storage.put(
          `${
            (
              await Auth.currentAuthenticatedUser()
            ).username
          }/profile-image.jpg`,
          file[0],
          {
            contentType: "image/jpeg",
          }
        );
        console.log(result);
      }
    },
  },
});
</script>
