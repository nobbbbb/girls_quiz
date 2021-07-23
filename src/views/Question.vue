<template>
	<div class="container col-md-10">
		<div class="count-info col-md-6">
			<p>{{ count }} / 5問</p>
		</div>
		<div class="girls-images">
			<img src="favicon.ico" title="girls-before">
			<img src="favicon.ico" title="girls-after">
		</div>
	</div>	
</template>

<script>
export default {
	name: 'Question',
	data: function() {
		return {
			count: 1
		}
	}
}
</script>
<style scoped>
.girls-images {
	text-align: center;
}
img {
	width: 45%;
	padding: 20px;
}
</style>