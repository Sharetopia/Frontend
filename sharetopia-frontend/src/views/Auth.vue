<template>
  <amplify-authenticator>
    <amplify-sign-out></amplify-sign-out>
  </amplify-authenticator>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {},
})
export default class Auth extends Vue {}
</script>
