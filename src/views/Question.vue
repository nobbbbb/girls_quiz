<template>
	<div class="container col-md-10">
		<div class="count-info col-md-6 mx-10">
			<p>Q. {{ count }} / 5</p>
		</div>
		<!-- 問題の画像表示 -->
		<div class="question-wrapper mb-10">
			<div 
				class="girls-images"
				v-for="(item, questionIndex) in questions"
				:key=questionIndex
				>
				<div
					v-for="(image, imageIndex) in item.image"
					:key=imageIndex
				>
				<img :src=image.before title="girls-before">
				</div>
			</div>
			<p>変化しているのはどこ？</p>
		</div>
		<!-- 回答の選択肢表示 -->
		
		<div class="answer-wrapper my-10">
			<div 
				class="answer-option"
				v-for="(item, questionIndex) in questions"
				:key=questionIndex
			>
					<v-btn 
						depressed
						large
						rounded
						min-width="150"
						v-for="(selection, selectIndex) in item.selections"
						:key=selectIndex
						@click="counter"
					>
						{{ selection.choice }}
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
			count: 1,
			questions: [
				{ 
					image: [
						{ before: 'sample_1.jpg' },
						{ after: 'sample_1.jpg' }
					]
				},
				{ 
					selections: [
						{
							choice: '眉毛'
						},
						{
							choice: '前髪'
						},
						{
							choice: '特になし'
						},
						{ 
							choice: '髪の巻き'
						}
					]
				},
				{ 
					answer: '前髪'
				}
			]
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