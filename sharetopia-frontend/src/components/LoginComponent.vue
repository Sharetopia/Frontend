<template>
  <div class="card">
    <div class="flex md:w-1/2 w-screen divide-black divide-x-2">
      <div class="w-1/2 pl-5">
        <h2 class="font-bold mb-5">Einloggen</h2>
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
        <PrimaryButton title="Anmelden" />
      </div>
    </div>

    <amplify-authenticator>
      <amplify-sign-out></amplify-sign-out>
    </amplify-authenticator>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import PrimaryButton from "@/uiElements/PrimaryButton.vue";

@Options({
  components: { PrimaryButton },
  props: {},
})
export default class LoginComponent extends Vue {}
</script>
