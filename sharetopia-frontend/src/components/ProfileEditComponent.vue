<template>
  <div class="card p-8 w-96 flex flex-col">
    <h1>Mein Profil</h1>
    <div class="flex justify-center">
      <div class="flex relative mt-4">
        <img
          :src="previewImage"
          alt="profile picture"
          class="rounded-full h-32 w-32"
        />
        <div>
          <label for="profilepic">
            <img
              src="../assets/editIcon.svg"
              alt="profile picture"
              class="z-10 absolute bottom-0 right-0"
            />
          </label>
          <input
            id="profilepic"
            ref="fileInput"
            type="file"
            @input="pickFile"
            class="hidden"
          />
        </div>
      </div>
    </div>
    <div class="flex flex-col my-6">
      <input
        type="text"
        class="rounded-t-xl border py-2 px-4"
        placeholder="Vorname"
        v-model="currentUser.valueOf().forename"
      />
      <input
        type="text"
        class="border py-2 px-4"
        placeholder="Nachname"
        v-model="currentUser.valueOf().surname"
      />
      <input
        type="text"
        class="border py-2 px-4"
        placeholder="Straße und Hausnummer"
        v-model="currentUser.valueOf().address"
      />
      <input
        type="text"
        class="border py-2 px-4"
        placeholder="Stadt"
        v-model="currentUser.valueOf().city"
      />
      <input
        type="text"
        class="rounded-b-xl border py-2 px-4"
        placeholder="Postleitzahl"
        v-model="currentUser.valueOf().postalCode"
      />
    </div>
    <div class="flex justify-center">
      <div class="w-2/3 flex">
        <PrimaryButton title="Speichern" class="flex-1" @click="submit()" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import PrimaryButton from "@/uiElements/PrimaryButton.vue";
import { ref, defineExpose } from "vue";
import { useUser } from "@/composables/useUser";
import { useAnalytics } from "@/composables/useAnalytics";

const { currentUser, createUser } = useUser();
// eslint-disable-next-line @typescript-eslint/no-var-requires
const previewImage = ref<any>(require("@/assets/profile_blank.png"));
const submit = (): void => {
  createUser(currentUser.value);
};
const fileInput: any = ref(null);
defineExpose({ fileInput });
const pickFile = (): void => {
  let file = fileInput.value.files;
  if (file && file[0]) {
    let reader = new FileReader();
    reader.readAsDataURL(file[0]);
    reader.onload = (e) => {
      previewImage.value = e.target?.result;
    };
  }
};

useAnalytics("Profile edit", "ProfileEditComponent.vue");
</script>
