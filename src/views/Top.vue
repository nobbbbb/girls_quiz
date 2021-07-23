<template>
  <div class="container">
		<div class="row my-12">
			<div class="app-title col-md-8">
				<span class="first-title">Girls</span>
				<br />
				<span class="last-title">Quiz</span>
			</div>
		</div>
			<div class="start-button my-12 py-5">
				<div class="text-center">
					<router-link 
						to="/quiz" 
						style="text-decoration: none"
					>
						<v-btn
							class="ma-2"
							elevation=2
							outlined
							x-large
							rounded
						>
						Start
						</v-btn>
					</router-link>
				</div>
		</div>
  </div>
</template>

<script>
export default {
  name: 'Top'
}
</script>

<style scoped>
.app-title {
	font-size: 6rem;
	text-align: center;
	font-family: 'Courier New', Courier, monospace;
}
</style>
