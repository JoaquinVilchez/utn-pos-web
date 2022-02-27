<template>
  <div class="card">
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class extends Vue {
  middleware({ redirect }) {
    redirect('/providers')
  }
}
</script>
