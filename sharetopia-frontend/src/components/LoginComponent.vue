<template>
  <div class="">
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
        <button class="btn-red w-full">Anmelden</button>
      </div>
    </div>

<!--    <amplify-authenticator style="&#45;&#45;border-radius: 30px">-->
<!--      <amplify-sign-out></amplify-sign-out>-->
<!--    </amplify-authenticator>-->


    <div v-if="authState !== 'signedin'">You are signed out.</div>
    <amplify-auth-container>
      <amplify-authenticator>
<!--        <amplify-sign-up-->
<!--            v-slots="sign-up"-->
<!--            username-alias="email"-->
<!--            :formFields="formFields"-->
<!--        ></amplify-sign-up>-->
        <amplify-sign-out></amplify-sign-out>
      </amplify-authenticator>
    </amplify-auth-container>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { onAuthUIStateChange } from '@aws-amplify/ui-components'

@Options({
  components: {},
  props: {},
})
export default class LoginComponent extends Vue {
  // eslint-disable-next-line @typescript-eslint/ban-types
  user?: object
  authState?: any
  unsubscribeAuth?: () => void
  formFields = [
    {
      type: 'email',
      label: 'Custom Email Label',
      placeholder: 'Custom email placeholder',
      inputProps: { required: true, autocomplete: 'username' },
    },
    {
      type: 'password',
      label: 'Custom Password Label',
      placeholder: 'Custom password placeholder',
      inputProps: { required: true, autocomplete: 'new-password' },
    },
    {
      type: 'phone_number',
      label: 'Custom Phone Label',
      placeholder: 'Custom phone placeholder',
    },
  ]

  created() {
    this.unsubscribeAuth = onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData;
    })
  }

  beforeUnmount() {
    if(this.unsubscribeAuth) {
      this.unsubscribeAuth();
    }
  }
}
</script>
