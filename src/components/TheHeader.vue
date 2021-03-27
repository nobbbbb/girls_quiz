<template>
	<header>
		<div class="text-center my-4">
			<router-link to="/" class="title">
				<span>{{ title }}</span>
			</router-link>
		</div>
	</header>
</template>

<script>
export default {
	name: "Header",
	data() {
		return {
			title: "Girls Quiz"
		}
	}
}
</script>

<style scoped>
.title {
	text-decoration: none;
	color: white;
	font-size: 1.5rem;
}
header {
	background-color:  rgb(71, 187, 207);
}
</style>