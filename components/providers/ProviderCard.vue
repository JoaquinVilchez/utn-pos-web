<template>
  <card class="card-user" v-if="provider">
    <p class="card-text"></p>
    <div class="author">
      <div class="block block-one"></div>
      <div class="block block-two"></div>
      <div class="block block-three"></div>
      <div class="block block-four"></div>
      <h2 class="title">{{provider.name}}</h2>
      <p class="description">{{provider.email}}</p>
      <p>{{provider.phone}}</p>
      <p>{{provider.address}}</p>
    </div>
  </card>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'nuxt-property-decorator'
import Provider from '~/models/provider'

@Component
export default class extends Vue {
  @Prop() provider: Provider
}
</script>