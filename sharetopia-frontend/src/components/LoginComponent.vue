<script lang="ts">
import { Options, Vue } from "vue-class-component";
import PrimaryButton from "@/uiElements/PrimaryButton.vue";
import { Authenticator } from "@aws-amplify/ui-vue";
import "@aws-amplify/ui-vue/styles.css";
import { I18n } from "aws-amplify";
import { translations } from "@/assets/translations.ts";
import Amplify, { Auth } from "aws-amplify";
import { formDataSingUp, formDataSingIn } from "@/model/amplifyFormData";
import { onAuthUIStateChange } from "@aws-amplify/ui-components";

I18n.setLanguage("de");
I18n.putVocabularies(translations);

@Options({
  components: { PrimaryButton, Authenticator },
  props: {},
})
export default class LoginComponent extends Vue {
  services = {};
  onSubscribeAuth: (() => void) | undefined = undefined;
  created(): void {
    this.onSubscribeAuth = onAuthUIStateChange((authState, authData) => {
      console.log(authState);
      console.log(authData);
    });
    this.services = {
      async handleSignUp(formData: formDataSingUp) {
        let { username, password, attributes } = formData;
        // custom username
        username = username.toLowerCase();
        attributes.email = attributes.email.toLowerCase();

        let result = await Auth.signUp({
          username,
          password,
          attributes,
        });

        return result;
      },

      async handleSignIn(formData: formDataSingIn) {
        let { username, password } = formData;
        // custom username
        username = username.toLowerCase();

        return Auth.signIn({
          username,
          password,
        }).then((result) => {
          return result;
        });
      },
    };
  }
}
</script>

<template>
  <div>
    <authenticator :services="services">
      <template v-slot="{ user, signOut }">
        <h1>Hello {{ user.username }}!</h1>
        <button @click="signOut">Sign Out</button>
      </template>
    </authenticator>
  </div>
</template>
