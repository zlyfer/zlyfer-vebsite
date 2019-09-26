<template>
	<div id="vplan">
		<b-alert show dismissible>
			Diese Seite befindet sich noch in Entwicklung.
			<b-button
				id="oldButton"
				variant="primary"
				target="_blank"
				href="http://vplan.zlyfer.net"
				>Alte Version</b-button
			>
		</b-alert>

		<b-nav pills id="datesNav">
			<b-nav-item
				v-for="date in dates"
				:key="date.id"
				variant="outline-primary"
				:active="activePlan == date.id"
				v-on:click="activePlan = date.id"
				>{{ date.name }}</b-nav-item
			>
		</b-nav>

		<b-table
			fixed
			responsive
			hover
			bordered
			:items="plans[activePlan]"
			:fields="fields"
		>
		</b-table>
	</div>
</template>

<script>
	import axios from "axios";
	const CONSTANTS = require("../constants.js");
	export default {
		data() {
			return {
				activePlan: "",
				plans: {},
				fields: [
					"Kurs",
					"Stunde",
					"Fach",
					"Raum",
					"Lehrer",
					"Info",
					"Vertretungstext"
				],
				dates: {}
			};
		},
		methods: {
			loadTables() {
				// Get Actual Tables:
				axios.get(CONSTANTS.VPLAN.VPLAN).then(r => {
					// Split entries into different days:
					r.data.entries.forEach(e => {
						if (!Object.keys(this.plans).includes(e["Datum"])) {
							this.plans[e["Datum"]] = [];
						} else this.plans[e["Datum"]].push(e);
					});

					// Style rows and cells:
					for (let plan in this.plans) {
						plan = this.plans[plan];
						let currentkurs = {
							name: "",
							variant: true
						};
						plan.forEach(e => {
							if (e.Kurs != currentkurs.name) {
								currentkurs.name = e.Kurs;
								currentkurs.variant = !currentkurs.variant;
							}
							if (e.Kurs == currentkurs.name) {
								currentkurs.name = e.Kurs;
								e._cellVariants = {
									Kurs: currentkurs.variant ? "warning" : "info"
								};
							}
							if (e.Info == "Entfall")
								e._cellVariants = { ...e._cellVariants, Info: "danger" };
						});
					}
				});
			}
		},
		mounted() {
			// Get Available Dates:
			axios.get(CONSTANTS.VPLAN.DATES).then(r => {
				let dates = [];
				Object.keys(r.data.entries).forEach(date => {
					dates.push({
						name: `${r.data.entries[date]} ${date}`,
						id: `${r.data.entries[date]}, ${date}`
					});
				});
				this.dates = dates;
				// this.activePlan = dates[0].id; // Doesn't initially update the table somehow.
				this.loadTables();
			});
		}
	};
</script>

<style>
	#header {
		margin-bottom: 0 !important;
	}
	#datesNav {
		margin: 10px !important;
		overflow-x: visible;
	}
	#oldButton {
		margin-left: 8px;
	}
</style>