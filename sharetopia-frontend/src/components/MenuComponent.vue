<template>
  <Menu as="div" class="">
    <div class="">
      <MenuButton
        class="
          inline-flex
          items-center
          w-full
          border border-gray-300
          shadow-sm
          px-4
          py-2
          bg-white
          text-sm
          font-medium
          text-gray-700
          hover:bg-gray-50
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          focus:ring-offset-gray-100
          focus:ring-indigo-500
          rounded-full
        "
      >
        <img src="../assets/burgerMenu.svg" class="mr-6" />
        <img
          src="../assets/profile_blank.png"
          class="max-h-8 min-h-8 rounded-full"
        />
      </MenuButton>
    </div>
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems
        class="
          origin-top-right
          absolute
          right-0
          mt-2
          w-56
          card
          bg-white
          ring-1 ring-black ring-opacity-5
          focus:outline-none
          divide-y divide-gray-250
        "
      >
        <div class="py-1">
          <MenuItem v-slot="{ active }">
            <button
                @click="pushMyAdverts"
                :class="[
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                'block w-full text-left px-4 py-2 text-sm',
              ]"
            >
              Meine Inserate
            </button>
          </MenuItem>
        </div>
        <div class="py-1">
          <MenuItem v-slot="{ active }">
            <button
                @click="pushMyBookings"
                :class="[
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                'block w-full text-left px-4 py-2 text-sm',
              ]"
            >
              Meine Buchungen
            </button>
          </MenuItem>
        </div>
        <div class="py-1">
          <MenuItem v-slot="{ active }">
            <button
              @click="showMyProfile"
              :class="[
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                'block w-full text-left px-4 py-2 text-sm',
              ]"
            >
              Mein Profil
            </button>
          </MenuItem>
        </div>
        <div class="py-1">
          <MenuItem v-slot="{ active }">
            <button
              @click="logout"
              :class="[
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                'block w-full text-left px-4 py-2 text-sm',
              ]"
            >
              Ausloggen
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { Auth } from "aws-amplify";
import { Routes } from "@/router/routes";

@Options({
  props: {},
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
  },
})
export default class MenuComponent extends Vue {
  async logout(): Promise<void> {
    console.log("wir sind hier")
    await Auth.signOut().then(
      (success) => {
        Routes.pushLoginRoute(this.$router);
      },
      (failure) => {
        Routes.pushLoginRoute(this.$router);

        //TODO: What do we do then?
      }
    );
  }

  pushMyBookings(): void {
    Routes.pushMyBookingsRoute(this.$router)
  }

  pushMyAdverts(): void {
    Routes.pushMyAdvertsRoute(this.$router)
  }

  showMyProfile(): void {
    console.log("show my profile popUp");
  }
}
</script>
