<template>
	<div class="container col-md-10">
		<div class="count-info col-md-6 mx-10">
			<p>Q. {{ count }} / 3</p>
		</div>
		<!-- 問題の画像表示 -->
		<div class="question-wrapper">
			<div class="girls-image mb-10">
					<img :src=question.image.before title="girls-before">
					<img :src=question.image.after title="girls-after">
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
					v-for="(selection, selectIndex) in question.selections"
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
			answers: [],
			reason: {},
			count: 1,
			question:
				{ 
					image: { 
						before: 'sample_1.jpg',
						after: 'sample_1.jpg'
					},
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
					],
					answer: '前髪',
					charactor: 'メンヘラ',
					reason: '全然自分のことを見てくれていないから'
				}
		}
	},

	methods: {
		counter: function() {
			if (this.count<3) {
				return this.count ++
			} else {
				this.$router.push('/result')
			}
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