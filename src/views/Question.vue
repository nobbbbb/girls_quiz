<template>
	<div class="container col-md-10">
		<div class="count-info col-md-6 mx-10">
			<p>Q. {{ count }} / 5</p>
		</div>
		<!-- 問題の画像表示 -->
		<div class="question-wrapper mb-10">
			<div class="girls-images">
				<img src="sample_1.png" title="girls-before">
				<img src="sample_1.png" title="girls-after">
			</div>
			<p>変化しているのはどこ？</p>
		</div>
		<!-- 回答の選択肢表示 -->
		<div class="answer-wrapper my-10">
			<div class="answer-option">
					<v-btn 
						depressed
						large
						rounded
						min-width="150"
					>
						選択肢1
					</v-btn>
					<v-btn 
						depressed
						large
						rounded
						min-width="150"
					>
						選択肢2
					</v-btn>
					<v-btn 
						depressed
						large
						rounded
						min-width="150"
					>
						選択肢3
					</v-btn>
					<v-btn 
						depressed
						large
						rounded
						min-width="150"
					>
						選択肢4
					</v-btn>
					<v-btn 
						depressed
						large
						rounded
						min-width="150"
					>
						選択肢5
					</v-btn>
					<v-btn 
						depressed
						large
						rounded
						min-width="150"
					>
						選択肢6
					</v-btn>
			</div>
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
.question-wrapper {
	text-align: center;
}
img {
	width: 45%;
	padding: 20px;
}
.answer-wrapper {
	display: block;
	text-align: center;
}
.answer-option {
	display: inline-grid;
	grid-template-columns: 20% 20%;
	grid-gap: 50px 180px;
	width: 420px;
	
}
</style>