<template>
  <div class="flex w-max">
    <ResultListItemView :productModel="productModel" />
    <SecondaryButton
      title="Beschreibung bearbeiten"
      image-name="burgerMenu.svg"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ProductListItemView from "@/views/ProductListItemView.vue";
import { ProductModel } from "@/model/ProductModel";
import SecondaryButton from "@/uiElements/SecondaryButton.vue";

@Options({
  components: {
    SecondaryButton,
    ResultListItemView: ProductListItemView,
  },
  props: {
    productModel: Object,
  },
})
export default class ContactDetailView extends Vue {
  productModel!: ProductModel;
}
</script>
