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
              <user-card :provider="provider">
                {{provider}}
              </user-card>
            </div>
          </div>
      </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import UserCard from '~/components/UserProfile/UserCard.vue';

@Component({
  components: {
    UserCard
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
