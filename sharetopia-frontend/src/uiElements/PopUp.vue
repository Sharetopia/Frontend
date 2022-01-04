<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="$emit('close')">
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="min-h-screen px-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay class="fixed inset-0" />
          </TransitionChild>
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <div
              class="
                inline-block
                w-fit
                h-screen
                overflow-hidden
                align-middle
                transition-all
                transform
                flex
                justify-center
              "
            >
              <div
                class="fixed top-0 bottom-0 left-0 right-0 backdrop-blur-md"
                style="
                  background-color: rgba(255, 255, 255, 0.5);
                  backdrop-filter: blur(1px);
                "
                @click="$emit('close')"
              ></div>
              <div class="mt-32 p-8 z-10">
                <slot />
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import {
  Dialog,
  DialogOverlay,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";

@Options({
  props: {
    isOpen: Boolean,
  },
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
  },
  emits: ["close"],
})
export default class PopUp extends Vue {
  isOpen!: boolean;
}
</script>
