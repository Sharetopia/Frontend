<template>
  <div class="layout">
    <HeaderComponent class="flex-none" />
    <div class="flex-1 mt-10 flex justify-center">
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
          <button class="btn-red w-full">Registrieren</button>
        </div>
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
          <button class="btn-red w-full">Anmelden</button>
        </div>
      </div>
    </div>
    <Footer class="flex-none" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MenuBurgerButton from "../archiv/MenuBurgerButton.vue";
import SearchComponent from "../components/SearchComponent.vue";
import HomeHeader from "../archiv/HomeHeader.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

@Options({
  components: {
    FooterComponent,
    HeaderComponent,
    MenuBurgerButton,
    Search: SearchComponent,
    HomeHeader,
  },
})
export default class Authentication extends Vue {}
</script>
