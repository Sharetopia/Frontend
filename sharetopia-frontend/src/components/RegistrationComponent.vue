<template>
  <div class="card">
    <div class="flex md:w-1/2 w-screen divide-black divide-x-2">
      <div class="w-1/2 pr-5">
        <h2 class="font-bold mb-5">Registrieren</h2>
        <input
          type="text"
          class="border rounded-2xl px-3 py-1 mb-3 w-full"
          placeholder="Vorname"
        />
        <input
          type="text"
          class="border rounded-2xl px-3 py-1 mb-3 w-full"
          placeholder="Nachname"
        />
        <input
          type="text"
          class="border rounded-2xl px-3 py-1 mb-3 w-full"
          placeholder="E-Mail"
        />
        <input
          type="text"
          class="border rounded-2xl px-3 py-1 mb-3 w-full"
          placeholder="Passwort"
        />
        <input
          type="text"
          class="border rounded-2xl px-3 py-1 mb-3 w-full"
          placeholder="Passwort wiederholen"
        />
        <PrimaryButton title="Registrieren" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import PrimaryButton from "@/uiElements/PrimaryButton.vue";

@Options({
  components: { PrimaryButton },
  props: {},
})
export default class RegistrationComponent extends Vue {}
</script>
