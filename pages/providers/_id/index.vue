<template>
  <section class="providers-section">
      <div class="card p-3">
          <div class="card-header mx-3">
            <div class="row d-flex justify-content-between">
                <h3>Proveedor</h3>
            </div>
          </div>
          <div class="card-body">
            <div class="col-md-4">
              <provider-card :provider="provider" />
            </div>
          </div>
      </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import ProviderCard from '~/components/providers/ProviderCard.vue';

@Component({
  components: {
    ProviderCard
  }
})
export default class extends Vue {

	mounted() {
		this.fetchProvider()
	}

	get provider() {
		return this.$store.state.provider.provider
	}

	async fetchProvider() {
    const id = this.$route.params.id
    await this.$store.dispatch(`provider/fetchOne`, { id })
	}
}
</script>
