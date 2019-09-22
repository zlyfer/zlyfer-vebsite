<template>
	<footer class="footer">
		<div class="container-fluid">
			<div class="row justify-content-around">
				<div class="col-8 col-md-5">
					<h5 class="title">Welcome to zlyfer.net!</h5>
					<p class="description">
						This website is still in progress. Visit
						<a
							target="_blank"
							href="https://github.com/zlyfer/zlyfer-vebsite"
						>GitHub</a> for updates.
					</p>
				</div>
				<div class="col-2">
					<ul class="list-unstyled">
						<li>
							<a class="footerlink" target="_blank" href="https://github.com/zlyfer">GitHub</a>
						</li>
						<li>
							<a class="footerlink" target="_blank" href="https://zlyfer.net">Stable Website</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: "TheFooter"
};
</script>


<style scoped>
.footer {
	background-color: #1d1d1d;
	padding-top: 2rem;
	padding-bottom: 4rem;
}

.title {
	color: #fff;
}

.description {
	color: #fff;
}

.footerlink,
.footerlink:hover {
	color: #fff;
}
</style>
