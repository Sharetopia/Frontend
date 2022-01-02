<template>
  <div class="card p-8 w-96 flex flex-col">
    <h1>Mein Profil</h1>
    <div class="flex justify-center">
      <div class="w-1/3 flex relative mt-4">
        <img
          src="../assets/profile_blank.png"
          alt="profile picture"
          class="rounded-full"
        />
        <img
          src="../assets/editIcon.svg"
          alt="profile picture"
          class="z-10 absolute bottom-0 right-0"
        />
      </div>
    </div>
    <div class="flex flex-col my-6">
      <input
        type="text"
        class="rounded-t-xl border py-2 px-4"
        placeholder="Vorname"
        v-model="profileModelValue.forename"
      />
      <input
        type="text"
        class="border py-2 px-4"
        placeholder="Nachname"
        v-model="profileModelValue.surname"
      />
      <input
        type="text"
        class="border py-2 px-4"
        placeholder="Straße und Hausnummer"
        v-model="profileModelValue.address"
      />
      <input
        type="text"
        class="rounded-b-xl border py-2 px-4"
        placeholder="Postleitzahl"
        v-model="profileModelValue.postalCode"
      />
    </div>
    <div class="flex justify-center">
      <div class="w-2/3 flex">
        <PrimaryButton title="Speichern" class="flex-1" @click="submit()" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import PrimaryButton from "@/uiElements/PrimaryButton.vue";
import { profileModel } from "@/model/profileModel";

@Options({
  components: { PrimaryButton },
  props: {},
})
export default class ProfileEditComponent extends Vue {
  profileModelValue: profileModel = {
    forename: "",
    surname: "",
    address: "",
    city: "",
    postalCode: undefined,
  };
  submit = (): void => {
    console.log(this.profileModelValue);
  };
}
</script>
