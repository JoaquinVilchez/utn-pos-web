<template>
  <div class="row"><h3>Starter page</h3></div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class extends Vue {
  mounted() {
    console.log('OK')
  }
}
</script>
