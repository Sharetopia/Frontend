<template>
  <div class="flex-col space-y-2">
    <PopUp :is-open="showCreateAdvertPopUp" @close="closeCreateAdvertPopUp">
      <AdvertEditComponent
        :title="'Inserat erstellen'"
        :productModel="newProduct"
        @save="createNewProduct"
      />
    </PopUp>

    <div class="space-y-2">
      <MyAdvertListItemView
        :key="myAdvert.productModel.id"
        v-for="myAdvert in myAdverts"
        :my-advert-model="myAdvert"
        :reload="loadMyAdverts"
      />
    </div>

    <PrimaryButton
      title="Inserat erstellen"
      @click="openCreateAdvertPopUp"
    ></PrimaryButton>
  </div>
</template>

<script lang="ts" setup>
import MyAdvertListItemView from "@/views/MyAdvertListItemView.vue";
import PopUp from "@/uiElements/PopUp.vue";
import { useMyAdverts } from "@/composables/useMyAdverts";
import PrimaryButton from "@/uiElements/PrimaryButton.vue";
import AdvertEditComponent from "@/components/AdvertEditComponent.vue";
import { useProduct } from "@/composables/useProduct";
import { ProductModel } from "@/model/ProductModel";
import { ref } from "vue";

const { myAdverts, loadMyAdverts } = useMyAdverts();
const { uploadProduct, createEmptyProductModel } = useProduct(undefined);
let showCreateAdvertPopUp = ref(false);
const newProduct = ref<ProductModel>(createEmptyProductModel());

const openCreateAdvertPopUp = () => {
  showCreateAdvertPopUp.value = true;
};

const closeCreateAdvertPopUp = () => {
  showCreateAdvertPopUp.value = false;
  newProduct.value = createEmptyProductModel();
};

const createNewProduct = async () => {
  const newProductValue: ProductModel = newProduct.value as ProductModel;
  await uploadProduct(newProductValue);
  await loadMyAdverts();
  closeCreateAdvertPopUp();
};
</script>
