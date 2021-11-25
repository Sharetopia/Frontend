<template>
  <div class="flex p-8 shadow-md sticky top-0 bg-white">
    <img src="../assets/logo.svg" class="flex-none" />
    <div class="flex-1"></div>
    <div class="flex items-center">
      <Menu as="div" class="relative inline-block text-left">
        <div class="">
          <MenuButton
            class="
              inline-flex
              justify-center
              items-center
              w-full
              rounded-md
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
              rounded-2xl
              shadow-lg
              bg-white
              ring-1 ring-black ring-opacity-5
              focus:outline-none
              divide-y divide-gray-250
            "
          >
            <div class="py-1">
              <MenuItem v-slot="{ active }">
                <a
                  href="#"
                  :class="[
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm',
                  ]"
                  >Meine Inserate</a
                >
              </MenuItem>
            </div>
            <div class="py-1">
              <MenuItem v-slot="{ active }">
                <a
                  href="#"
                  :class="[
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm',
                  ]"
                  >Meine Buchungen</a
                >
              </MenuItem>
            </div>
            <div class="py-1">
              <MenuItem v-slot="{ active }">
                <a
                  href="#"
                  :class="[
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm',
                  ]"
                  >Mein Profil</a
                >
              </MenuItem>
            </div>
            <div class="py-1">
              <form method="POST" action="#">
                <MenuItem v-slot="{ active }">
                  <button
                    type="submit"
                    :class="[
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full text-left px-4 py-2 text-sm',
                    ]"
                  >
                    Ausloggen
                  </button>
                </MenuItem>
              </form>
            </div>
          </MenuItems>
        </transition>
      </Menu>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";

@Options({
  props: {},
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
  },
})
export default class HeaderSearch extends Vue {}
</script>
