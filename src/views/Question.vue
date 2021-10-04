<template>
	<div class="container col-md-10">
		<div class="count-info col-md-6 mx-10">
			<h2>Q. {{ count }} / 3</h2>
		</div>
		<!-- ブラウザ上でのnullエラー防止のためにv-ifを使用 -->
		<div v-if=question> 
			<!-- 問題の画像表示 -->
			<div class="question-wrapper">
				<h1>{{ question.charactor }}</h1>
				<div class="girls-image mb-3">
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
					@click="multipleHandler(selectIndex)"
				>
					{{ selection.choice }}
				</v-btn>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import store from '../store'
export default {
	name: 'Question',
	data: function() {
		return {
			sharedState: store.state,
			count: 1,
			question: null,
			questions: [
				{ 
					image: { 
						before: 'sample_1.jpg',
						after: 'sample_1.jpg'
					},
					selections: [
						{
							choice: '眉毛',
							reason: '全然自分のことを見てくれていないから'
						},
						{
							choice: '前髪',
							reason: '全然自分のことを見てくれていないから'
						},
						{
							choice: 'ファンデーション',
							reason: '全然自分のことを見てくれていないから'
						},
						{
							choice: 'メンタル',
							reason: '全然自分のことを見てくれていないから'
						},
						{
							choice: '化粧水',
							reason: '全然自分のことを見てくれていないから'
						},
						{ 
							choice: '特になし',
							reason: '全然自分のことを見てくれていないから'
						}
					],
					answer: '前髪',
					character: 'メンヘラ',
					index: 0
				},
				{ 
					image: { 
						before: 'sample_2.jpg',
						after: 'sample_2.jpg'
					},
					selections: [
						{
							choice: 'まつ毛',
							reason: '馴れ馴れしかったから'
						},
						{
							choice: '髪色',
							reason: '馴れ馴れしかったから'
						},
						{
							choice: 'アイライン',
							reason: '馴れ馴れしかったから'
						},
						{ 
							choice: 'アイプチ',
							reason: '馴れ馴れしかったから'
						},
						{
							choice: 'ノーズシャドウ',
							reason: '馴れ馴れしかったから'
						},
						{
							choice: '特になし',
							reason: '馴れ馴れしかったから'
						}
					],
					answer: 'アイライン',
					character: '清楚系',
					index: 1
				},
				{ 
					image: { 
						before: 'sample_3.jpg',
						after: 'sample_3.jpg'
					},
					selections: [
						{
							choice: 'カラコン',
							reason: '自分に興味なさそうで腹立つから'
						},
						{
							choice: 'アイシャドウ',
							reason: '自分に興味なさそうで腹立つから'
						},
						{
							choice: '前髪',
							reason: '自分に興味なさそうで腹立つから'
						},
						{ 
							choice: 'シャンプー',
							reason: '自分に興味なさそうで腹立つから'
						},
						{
							choice: 'シリコン注入',
							reason: '自分に興味なさそうで腹立つから'
						},
						{
							choice: '特になし',
							reason: '自分に興味なさそうで腹立つから'
						}
					],
					answer: 'カラコン',
					character: '腹黒系',
					index: 2
				},
				{ 
					image: { 
						before: 'sample_4.jpg',
						after: 'sample_4.jpg'
					},
					selections: [
						{
							choice: '髪型',
							reason: 'ヨイショされてるようで嫌だから'
						},
						{
							choice: '顔の調子',
							reason: 'ヨイショされてるようで嫌だから'
						},
						{
							choice: 'チーク',
							reason: 'ヨイショされてるようで嫌だから'
						},
						{ 
							choice: 'リップ',
							reason: 'ヨイショされてるようで嫌だから'
						},
						{
							choice: '輝き',
							reason: 'ヨイショされてるようで嫌だから'
						},
						{
							choice: '特になし',
							reason: 'ヨイショされてるようで嫌だから'
						}
					],
					answer: 'チーク',
					character: 'サバサバ系',
					index: 3
				}
			]
		}
	},
	methods: {
		multipleHandler: function(key) {
			this.judgeAnswer(key) //正誤判別
			this.countUp() //現在の問題数
			this.changeQuestion() //解答後の問題変更
		},
		countUp: function() {
			if (this.count<3) {
				return this.count ++
			} else {
				this.$router.push('/result')
			}
		},
		changeQuestion: function() {
			this.question = this.questions[this.question.index++]
			return this.question
		},
		judgeAnswer: function(key) {
			let clickedSelection = this.question.selections[key]
			if (clickedSelection.choice === this.question.answer) {
				this.sharedState.answers.push(this.question.answer)
				this.sharedState.funnyReasons.push(clickedSelection.reason)
			} else {
				this.sharedState.reasons.push(clickedSelection.reason)
				this.sharedState.characters.push(this.question.character)
			}
		},
		//Fisher-Yatesのシャッフルアルゴリズム
		shuffle: function(array) {
			for(let i =array.length-1 ; i>0 ;i--){
        let j = Math.floor( Math.random() * (i + 1) );
        [array[i],array[j]]=[array[j],array[i]];
    }
			return array
		}
	},
	mounted: function() {
		this.question = this.shuffle(this.questions)[0]
		let quizData = this.sharedState
		quizData.answers = []
		quizData.reasons = []
		quizData.characters = []
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