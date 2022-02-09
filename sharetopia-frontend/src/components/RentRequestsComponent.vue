<template>
  <div class="card p-8 flex flex-col">
    <h1>Mietanfragen</h1>
    <div class="flex flex-col divide-y gap-2 mt-4">
      <div
        class="text-left flex flex-row gap-8 pt-4"
        :key="request.id"
        v-for="request in requests"
      >
        <ContactDetailView
          :user-id="request.userId"
          hide-address
        ></ContactDetailView>
        <div>
          <p>Start: {{ request.timeRange.start.toDateString() }}</p>
          <p>Ende: {{ request.timeRange.end.toDateString() }}</p>
        </div>
        <p v-if="request.accepted === true">Akzeptiert</p>
        <p
          v-if="
            (request.accepted !== undefined || null) &&
            request.accepted === false
          "
        >
          Abgelehnt
        </p>
        <div v-if="request.accepted === undefined || null">
          <SecondaryButton
            title="Akzeptieren"
            image-name="burgerMenu.svg"
            @click="acceptRequestWith('413525')"
          />
          <SecondaryButton
            title="Ablehnen"
            image-name="burgerMenu.svg"
            @click="rejectRequestWith('141523')"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ContactDetailView from "@/views/ContactDetailView.vue";
import { RentModel } from "@/model/RentModel";
import SecondaryButton from "@/uiElements/SecondaryButton.vue";

@Options({
  components: { SecondaryButton, ContactDetailView },
  props: {},
})
export default class RentRequestsComponent extends Vue {
  requests: RentModel[] = []

  acceptRequestWith(id: string): void {
    console.log("Todo");
  }

  rejectRequestWith(id: string): void {
    console.log("Todo");
  }
}
</script>
