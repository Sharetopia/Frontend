<template>
  <PrimaryButton title="Inserat erstellen" @click="openCreateAdvertPopUp"></PrimaryButton>
  <div class="">
    <MyAdvertListItemView
      :key="productModel.id"
      v-for="productModel in myAdverts"
      :productModel="productModel"
    />
  </div>

  <PopUp :is-open="showCreateAdvertPopUp" @close="closeCreateAdvertPopUp">
    <AdvertEditComponent :title="'Inserat erstellen'" :productModel="newProduct" @save="createNewProduct"/>
  </PopUp>
</template>

<script lang="ts" setup>
import MyAdvertListItemView from "@/views/MyAdvertListItemView.vue";
import PopUp from "@/uiElements/PopUp.vue";
import {useMyAdverts} from "@/composables/useMyAdverts";
import PrimaryButton from "@/uiElements/PrimaryButton.vue";
import AdvertEditComponent from "@/components/AdvertEditComponent.vue";
import {useProduct} from "@/composables/useProduct";
import {ProductModel} from "@/model/ProductModel";
import {ref} from "vue";


const {myAdverts, loadMyAdverts} = useMyAdverts()
const {uploadProduct, createEmptyProductModel} = useProduct(undefined)
let showCreateAdvertPopUp = ref(false)
const newProduct = ref<ProductModel>(createEmptyProductModel())

const openCreateAdvertPopUp = () => {
  console.log("open popup")
  showCreateAdvertPopUp.value = true
}

const closeCreateAdvertPopUp = () => {
  showCreateAdvertPopUp.value = false
}

const createNewProduct = () => {
  const newProductValue: ProductModel = newProduct.value as ProductModel
  uploadProduct(newProductValue)
}

</script>
