<template>
	<div id="vplan">
		<b-jumbotron
			header="Vertretungsplan"
			lead="Alternative Vertretungsplan der BBS2
				Emden"
		>
			<hr class="my-4" />
			<p>
				Dies ist die neuste überarbeitete Version. Von Zeit zu Zeit werden alle
				alten bekannten Features implementiert.
			</p>
			<b-button
				variant="primary"
				target="_blank"
				href="https://vplan.zlyfer.net"
			>
				Alte Version
			</b-button>
			<hr class="my-4" />
		</b-jumbotron>

		<b-table
			striped
			hover
			bordered
			fixed
			responsive
			:items="plan"
			:fields="fields"
			:busy="busy"
		>
			<template v-slot:table-busy>
				<div class="d-flex justify-content-center mb-3">
					<b-spinner
						vertical-align="center"
						style="width: 10rem; height: 10rem;"
						variant="primary"
						type="grow"
					></b-spinner>
				</div>
			</template>
		</b-table>
	</div>
</template>
<script>
	import axios from "axios";
	const CONSTANTS = require("../constants.js");
	export default {
		data() {
			return {
				busy: true,
				plan: {},
				fields: [
					{
						key: "Kurs",
						sortable: true
					},
					{
						key: "Stunde",
						sortable: true
					},
					{
						key: "Fach",
						sortable: true
					},
					{
						key: "Raum",
						sortable: true
					},
					{
						key: "Lehrer",
						sortable: true
					},
					{
						key: "Info",
						sortable: true
					},
					{
						key: "Vertretungstext",
						sortable: true
					}
				]
			};
		},
		mounted() {
			axios.get(CONSTANTS.VPLAN.CURRENT).then(r => {
				this.plan = r.data.entries;
				this.plan.forEach(e => {
					if (e.Info == "Entfall") e._cellVariants = { Info: "danger" };
					// else if (e.Info != "N/A") e._cellVariants = { Info: "info" };
				});
				this.busy = false;
			});
		}
	};
</script>

<style>
	div.jumbotron {
		margin-bottom: 0 !important;
	}
</style>
