<template>
  <section class="providers-section">
      <div class="card p-3">
          <div class="card-header mx-3">
            <div class="row d-flex justify-content-between">
                <h3>Proveedores</h3>
            </div>
          </div>
          <div class="card-body">
						<div class="col-md-12">
							<card class="card-plain" body-classes="table-full-width">
								<el-table
									header-cell-class-name="table-transparent"
									header-row-class-name="table-transparent"
									row-class-name="table-transparent"
									:data="providers"
								>
									<el-table-column
										min-width="150"
										sortable
										label="Nombre"
										property="name"
									></el-table-column>
									<el-table-column
										min-width="150"
										sortable
										label="Email"
										property="email"
									></el-table-column>
									<el-table-column
										min-width="150"
										sortable
										label="Dirección"
										property="addres"
									></el-table-column>
									<el-table-column
										min-width="150"
										sortable
										label="Teléfono"
										property="phone"
									></el-table-column>
									<el-table-column
										fixed="right"
										label="Acciones"
									>
										<template slot-scope="scope">
											<button
												class="btn btn-sm btn-primary"
												@click="viewProvider(scope.$index, providers)"
												type="text"
												size="small"
												name="edit"
											>
												Ver
											</button>
										</template>
									</el-table-column>
								</el-table>
							</card>
						</div>
          </div>
      </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { Table, TableColumn } from 'element-ui';

@Component({
	components: {
		[Table.name]: Table,
    [TableColumn.name]: TableColumn
	}
})
export default class extends Vue {

	mounted() {
		this.fetchProviders()
	}

	get providers() {
		return this.$store.state.provider.providers
	}

	fetchProviders() {
    this.$store.dispatch(`provider/fetchAll`)
	}

	viewProvider(index, rows) {
		const provider = rows[index]
		this.$router.push(`/providers/${provider._id}`)
	}
}
</script>
