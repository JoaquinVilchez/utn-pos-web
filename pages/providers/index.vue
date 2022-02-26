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
									:data="tableData"
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
										property="address"
									></el-table-column>
									<el-table-column
										min-width="150"
										sortable
										align="right"
										header-align="right"
										label="Teléfono"
										property="phone"
									></el-table-column>
									<el-table-column
										align="right"
										header-align="right"
										label="Acciones"
										property="actions"
									></el-table-column>
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

	tableData = [
		{
			id: 1,
			name: 'Dakota Rice',
			email: '$36.738',
			address: 'Niger',
			phone: 'Oud-Turnhout'
		},
		{
			id: 2,
			name: 'Minerva Hooper',
			email: '$23,789',
			address: 'Curaçao',
			phone: 'Sinaai-Waas'
		},
		{
			id: 3,
			name: 'Sage Rodriguez',
			email: '$56,142',
			address: 'Netherlands',
			phone: 'Baileux'
		},
		{
			id: 4,
			name: 'Philip Chaney',
			email: '$38,735',
			address: 'Korea, South',
			phone: 'Overland Park'
		},
		{
			id: 5,
			name: 'Doris Greene',
			email: '$63,542',
			address: 'Malawi',
			phone: 'Feldkirchen in Kärnten'
		}
	]

	mounted() {
		this.fetchProviders()
		setTimeout(() => {
			console.log('HOLA: ', this.providers)
		}, 3000)
	}

	get providers() {
		return this.$store.state.provider.providers
	}

	fetchProviders() {
    this.$store.dispatch(`provider/fetchAll`)
	}
}
</script>
