<template>
  <div class="flex w-full gap-y-10">
    <ProductListItemView :productModel="productModel" class="w-2/3" />
    <div class="flex flex-col gap-x-5 w-1/3 ml-2">
      <p
        class="text-amber-600 ml-6 mt-4"
        :style="{ color: colorForStatus(rentRequestModel.status) }"
      >
        {{ textForStatus(rentRequestModel.status, rentRequestModel.range) }}
      </p>
      <SecondaryButton
        title="Email schreiben"
        image-name="Mail.png"
        class="ml-2 mt-4"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import ProductListItemView from "@/views/ProductListItemView.vue";
import { ProductModel } from "@/model/ProductModel";
import SecondaryButton from "@/uiElements/SecondaryButton.vue";
import { RentRequestModel } from "@/model/RentModel";
import { DateRange } from "@/model/SearchModel";
import { defineProps } from "vue";
import { Factory } from "@/utils/factory";

const props = defineProps({
  productModel: {
    type: Object as () => ProductModel,
  },
  rentRequestModel: {
    type: Object as () => RentRequestModel,
  },
});

function textForStatus(status: string, dateRange: DateRange): string {
  let text =
    "Deine Miete vom " +
    Factory.createReadableDateStringFrom(dateRange.start as Date) +
    " bis zum " +
    Factory.createReadableDateStringFrom(dateRange.end as Date);
  switch (status) {
    case "accepted":
      return text + " wurde bestätigt.";
    case "open":
      return text + " ist offen.";
    case "rejected":
      return text + " wurde abgelehnt.";
    default:
      return "";
  }
}

function colorForStatus(status: string): string {
  console.log("es wird aufgerufen");
  switch (status) {
    case "accepted":
      return "rgb(4 120 87)";
    case "open":
      return "rgb(251 146 60)";
    case "rejected":
      return "rgb(190 24 93)";
    default:
      return "";
  }
}
</script>
