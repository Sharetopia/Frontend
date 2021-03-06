<template>
  <div>
    <Menu as="div" class="">
      <div class="">
        <MenuButton
          class="inline-flex items-center w-full border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 rounded-full"
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
          class="origin-top-right absolute right-8 mt-2 w-56 card bg-white ring-1 ring-black ring-opacity-5 focus:outline-none divide-y divide-gray-250 z-10"
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

    <PopUp :is-open="showProfile" @close="hideMyProfile">
      <ProfileEditComponent />
    </PopUp>
  </div>
</template>

<script lang="ts" setup>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { Auth } from "aws-amplify";
import PopUp from "@/uiElements/PopUp.vue";
import ProfileEditComponent from "@/components/ProfileEditComponent.vue";
import { useRoutes } from "@/composables/useRoutes";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAnalytics } from "@/composables/useAnalytics";

const showProfile = ref(false);
const router = useRouter();
const logout = async (): Promise<void> => {
  const { pushLoginRoute } = useRoutes(router);
  await Auth.signOut().then(
    () => {
      pushLoginRoute();
    },
    () => {
      pushLoginRoute();
    }
  );
};

const pushMyBookings = (): void => {
  useRoutes(router).pushMyBookingsRoute();
};

const pushMyAdverts = (): void => {
  useRoutes(router).pushMyAdvertsRoute();
};

const showMyProfile = (): void => {
  showProfile.value = true;
};

const hideMyProfile = (): void => {
  showProfile.value = false;
};

useAnalytics("Menu", "MenuComponent.vue");
</script>
