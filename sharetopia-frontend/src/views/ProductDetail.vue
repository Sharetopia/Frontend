<template>
  <div class="home">
    <ProductTextDetail />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ProductTextDetail from "@/components/ProductTextDetail.vue"; // @ is an alias to /src

@Options({
  components: {
    ProductTextDetail,
  },
})
export default class ProductDetail extends Vue {}
</script>
