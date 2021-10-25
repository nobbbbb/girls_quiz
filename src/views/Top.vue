<template>
  <div class="container">
		<div class="row my-10">
			<div class="app-title col-md-12">
				<p class="first-title">Girls</p>
				<p class="last-title">Quiz</p>
			</div>
		</div>
			<div class="start-button">
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
	font-size: 6em;
	font-weight: bold;
	text-align: center;
	font-family: 'Courier New', Courier, monospace;
}
</style>
