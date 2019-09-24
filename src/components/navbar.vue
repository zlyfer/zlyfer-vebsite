<template>
	<div id="apidoc">
		<b-navbar toggleable="lg" sticky="true" type="dark" variant="primary">
			<b-navbar-brand to="/">zlyfer</b-navbar-brand>

			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav>
					<b-nav-item-dropdown text="BBS2 Emden">
						<b-dropdown-header>Aktuelle Versionen</b-dropdown-header>
						<b-dropdown-item to="vplan">Vertretungsplan</b-dropdown-item>
						<b-dropdown-item to="apidoc">Vertretungsplan API</b-dropdown-item>
						<b-dropdown-divider></b-dropdown-divider>
						<b-dropdown-header>Alte Versionen</b-dropdown-header>
						<b-dropdown-item target="_blank" href="https://vplan.zlyfer.net"
							>Vertretungsplan</b-dropdown-item
						>
						<b-dropdown-item target="_blank" href="https://api.vplan.zlyfer.net"
							>Vertretungsplan API</b-dropdown-item
						>
					</b-nav-item-dropdown>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
	</div>
</template>

<script>
	export default {
		name: "navbar"
	};
</script>

<style scoped>
</style>
