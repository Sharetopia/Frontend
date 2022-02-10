<template>
  <div class="card p-8 flex flex-col">
    <h1>Mietanfragen</h1>
    <div class="flex flex-col divide-y gap-2 mt-4">
      <div
        class="text-left flex flex-row gap-8 pt-4"
        :key="request.id"
        v-for="request in rentRequestModels"
      >
        <ContactDetailView
          :user-id="request.requestUserId"
          hide-address
        ></ContactDetailView>
        <div>
          <p>Start: {{ request.range.start.toDateString() }}</p>
          <p>Ende: {{ request.range.end.toDateString() }}</p>
        </div>
        <p v-if="request.status === 'accepted'">Akzeptiert</p>
        <p v-if="request.status === 'rejected'">Abgelehnt</p>
        <div v-if="request.status === 'open'">
          <SecondaryButton
            title="Akzeptieren"
            image-name="burgerMenu.svg"
            @click="acceptRequestWith(request.requestedProductId, request.id)"
          />
          <SecondaryButton
            title="Ablehnen"
            image-name="burgerMenu.svg"
            @click="rejectRequestWith(request.requestedProductId, request.id)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ContactDetailView from "@/views/ContactDetailView.vue";
import { RentRequestModel } from "@/model/RentModel";
import SecondaryButton from "@/uiElements/SecondaryButton.vue";
import { useRentRequest } from "@/composables/useRents";
import {defineEmits, defineProps} from "vue";
import { useMyAdverts } from "@/composables/useMyAdverts";

const emit = defineEmits(["reload"]);
const props = defineProps({
  rentRequestModels: {
    type: Array as () => RentRequestModel[],
  },
});

const { answerRentRequest } = useRentRequest();
const { loadMyAdverts } = useMyAdverts();

function acceptRequestWith(
  requestedProductId: string,
  requestId: string
): void {
  answerRentRequest(requestedProductId, requestId, true);
  emit("reload")
}

function rejectRequestWith(
  requestedProductId: string,
  requestId: string
): void {
  answerRentRequest(requestedProductId, requestId, false);
  emit("reload")
}
</script>
