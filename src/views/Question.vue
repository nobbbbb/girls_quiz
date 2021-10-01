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
			question: {},
			questions: [
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
							choice: '髪の巻き'
						},
						{ 
							choice: '特になし'
						}
					],
					answer: '前髪',
					charactor: 'メンヘラ',
					reason: '全然自分のことを見てくれていないから'
				},
				{ 
					image: { 
						before: 'sample_2.jpg',
						after: 'sample_2.jpg'
					},
					selections: [
						{
							choice: 'まつ毛'
						},
						{
							choice: '髪色'
						},
						{
							choice: 'アイライン'
						},
						{ 
							choice: 'アイプチ'
						}
					],
					answer: 'アイライン',
					charactor: '清楚系',
					reason: '馴れ馴れしかったから'
				},
				{ 
					image: { 
						before: 'sample_3.jpg',
						after: 'sample_3.jpg'
					},
					selections: [
						{
							choice: 'カラコン'
						},
						{
							choice: 'アイシャドウ'
						},
						{
							choice: '前髪'
						},
						{ 
							choice: 'シャンプー'
						}
					],
					answer: 'カラコン',
					charactor: '腹黒系',
					reason: '自分に興味なさそうで腹立つから'
				},
				{ 
					image: { 
						before: 'sample_4.jpg',
						after: 'sample_4.jpg'
					},
					selections: [
						{
							choice: '髪型'
						},
						{
							choice: '顔の調子'
						},
						{
							choice: 'チーク'
						},
						{ 
							choice: 'リップ'
						}
					],
					answer: 'チーク',
					charactor: 'サバサバ系',
					reason: 'ヨイショされてるようで嫌だから'
				}
			]
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