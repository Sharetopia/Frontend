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
        class="border py-2 px-4"
        placeholder="Stadt"
        v-model="profileModelValue.city"
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
import { UserModel } from "@/model/UserModel";
import { ref } from "vue";
import { ProductModel } from "@/model/ProductModel";

@Options({
  components: { PrimaryButton },
  props: {},
})
export default class ProfileEditComponent extends Vue {
  profileModelValue: UserModel = {
    id: "",
    forename: "",
    surname: "",
    address: "",
    city: "",
    rating: 4,
    postalCode: undefined,
  };
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  previewImage = ref<any>(require("@/assets/profile_blank.png"));
  submit = (): void => {
    console.log(this.profileModelValue);
  };
  pickFile(): void {
    let input: any = this.$refs.fileInput;
    let file = input.files;
    if (file && file[0]) {
      let reader = new FileReader();
      reader.readAsDataURL(file[0]);
      reader.onload = (e) => {
        this.previewImage = e.target?.result;
      };
    }
  }
}
</script>
