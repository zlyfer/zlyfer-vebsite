<template>
	<div id="swagger"></div>
</template>

<script>
	export default {
		data() {
			return {};
		},
		mounted() {
			const SwaggerUI = require("swagger-ui");
			SwaggerUI({
				dom_id: "#swagger",
				url: "https://api.zlyfer.net",
				deepLinking: true,
				tagsSorter: true
			});
		}
	};
</script>

<style scoped></style>
