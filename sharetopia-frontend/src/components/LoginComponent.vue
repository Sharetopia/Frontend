<script lang="ts">
import { Options, Vue } from "vue-class-component";
import PrimaryButton from "@/uiElements/PrimaryButton.vue";
import { Authenticator } from "@aws-amplify/ui-vue";
import "@aws-amplify/ui-vue/styles.css";
import { I18n } from "aws-amplify";
import { translations } from "@/assets/translations.ts";
import { Auth } from "aws-amplify";
import {
  formDataSingUp,
  formDataSingIn,
  formDataSingUpConfirmation,
} from "@/model/amplifyFormData";
import { onAuthUIStateChange } from "@aws-amplify/ui-components";
import ProfileEditComponent from "@/components/ProfileEditComponent.vue";
import {useRoutes} from "@/composables/useRoutes";

I18n.setLanguage("de");
I18n.putVocabularies(translations);

@Options({
  components: { PrimaryButton, Authenticator, ProfileEditComponent },
  props: {},
})
export default class LoginComponent extends Vue {
  services = {};
  onSubscribeAuth: (() => void) | undefined = undefined;
  created(): void {
    let router = this.$router;

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

        return Auth.signUp({
          username,
          password,
          attributes,
        });
      },
      async handleConfirmSignUp(formData: formDataSingUpConfirmation) {
        let { username, code } = formData;
        return Auth.confirmSignUp(username, code).then((result) => {
          console.log(result);
          return result;
        });
      },
      async handleSignIn(formData: formDataSingIn) {
        let { username, password } = formData;
        // custom username
        username = formData.username.toLowerCase();

        return Auth.signIn({
          username,
          password,
        }).then((result) => {
          useRoutes(router).pushHomeRoute()
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
      <template v-slot="{}">
        <div class="">
          <ProfileEditComponent />
        </div>
      </template>
    </authenticator>
  </div>
</template>
