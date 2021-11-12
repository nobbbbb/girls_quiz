<template>
	<div class="container col-md-10">
		<div class="count-info">
			<h2>Q. {{ count }} / 3</h2>
		</div>
		<!-- ブラウザ上でのnullエラー防止のためにv-ifを使用 -->
		<div v-if=question> 
			<!-- 問題の画像表示 -->
			<div class="question-wrapper my-5">
				<h1>{{ question.character }}</h1>
				<div class="girls-image">
						<img :src=question.image.before title="girls-before">
						<img :src=question.image.after title="girls-after">
				</div>
				<p>変化しているのはどこ？</p>
			</div>
		<!-- 回答の選択肢表示 -->
			<div class="answer-wrapper my-6">
				<div class="answer-options">
				<v-btn
					class="answer-option"
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
						before: 'menhera.jpg',
						after: 'menhera_af_1.jpeg'
					},
					selections: [
						{
							choice: '眉毛',
							reason: '全然自分のことを見てくれていないから'
						},
						{
							choice: '前髪',
							reason: '今は話しかけて欲しくないから'
						},
						{
							choice: 'ファンデーション',
							reason: '全然自分のことを見てくれていないから'
						},
						{
							choice: 'メンタル',
							reason: 'メンタルとか意味わからないから'
						},
						{
							choice: '化粧水',
							reason: 'そこ気づかれても嬉しくないから'
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
						before: 'seiso.jpg',
						after: 'seiso_af_1.jpeg'
					},
					selections: [
						{
							choice: 'まつ毛',
							reason: '適当なこと言っているから'
						},
						{
							choice: '髪色',
							reason: 'チャラそうだから'
						},
						{
							choice: 'アイライン',
							reason: '馴れ馴れしいから'
						},
						{ 
							choice: 'アイプチ',
							reason: 'アイプチに触れるのはデリカシーないから'
						},
						{
							choice: 'ノーズシャドウ',
							reason: '適当なこと言っているから'
						},
						{
							choice: '特になし',
							reason: '適当なこと言っているから'
						}
					],
					answer: 'アイライン',
					character: '清楚系',
					index: 1
				},
				{ 
					image: { 
						before: 'haraguro.jpg',
						after: 'haraguro_af_1.jpeg'
					},
					selections: [
						{
							choice: 'カラコン',
							reason: '最近言動が癇に障るから'
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
							reason: 'なんか気持ち悪いから'
						},
						{
							choice: 'シリコン注入',
							reason: '整形疑惑かけられているから'
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
						before: 'sabasaba.jpg',
						after: 'sabasaba_af_1.jpeg'
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
							reason: 'ジロジロ見られて気味が悪いから'
						},
						{ 
							choice: 'リップ',
							reason: 'ヨイショされてるようで嫌だから'
						},
						{
							choice: '輝き',
							reason: '意味わからないから'
						},
						{
							choice: '特になし',
							reason: 'ヨイショされてるようで嫌だから'
						}
					],
					answer: 'チーク',
					character: 'サバサバ系',
					index: 3
				},
				{ 
					image: { 
						before: 'kamacho.png',
						after: 'kamacho_af_1.jpeg'
					},
					selections: [
						{
							choice: '髪色',
							reason: 'あしらわれているような気がするから'
						},
						{
							choice: 'ファンデーション',
							reason: '当ててほしいわけじゃないから'
						},
						{
							choice: '眉毛',
							reason: 'あしらわれているような気がするから'
						},
						{ 
							choice: 'アイシャドウ',
							reason: 'あしらわれているような気がするから'
						},
						{
							choice: '体調が悪い',
							reason: 'あしらわれているような気がするから'
						},
						{
							choice: '特になし',
							reason: 'そんなわけがないから'
						}
					],
					answer: 'ファンデーション',
					character: 'かまってちゃん',
					index: 4
				},
				{ 
					image: { 
						before: 'tsundere.jpg',
						after: 'tsundere_af_1.jpeg'
					},
					selections: [
						{
							choice: '眉毛',
							reason: '気付いたからって別に嬉しくないから'
						},
						{
							choice: 'リップ',
							reason: '適当なこと言う人嫌いだから'
						},
						{
							choice: 'フェイスライン',
							reason: '適当なこと言う人嫌いだから'
						},
						{
							choice: 'おでこの広さ',
							reason: 'バカにされてる気がするから'
						},
						{
							choice: 'カラコン',
							reason: '適当なこと言う人嫌いだから'
						},
						{ 
							choice: '特になし',
							reason: '特にないなら言わなくていいから'
						}
					],
					answer: '眉毛',
					character: 'ツンデレ',
					index: 5
				},
				{ 
					image: { 
						before: 'azatoi.jpg',
						after: 'azatoi_af_1.jpeg'
					},
					selections: [
						{
							choice: 'アイシャドウ',
							reason: 'トンチンカンなこと言っているから'
						},
						{
							choice: '鼻筋',
							reason: 'トンチンカンなこと言っているから'
						},
						{
							choice: '髪のツヤ',
							reason: 'トンチンカンなこと言っているから'
						},
						{
							choice: 'リップ',
							reason: 'もっと上手に褒めて欲しいから'
						},
						{
							choice: '香水',
							reason: '画像で匂いがわかるわけないから'
						},
						{ 
							choice: '特になし',
							reason: 'トンチンカンなこと言っているから'
						}
					],
					answer: 'リップ',
					character: 'あざとい系',
					index: 6
				},
				{ 
					image: { 
						before: 'otona.jpg',
						after: 'otona_af_1.jpeg'
					},
					selections: [
						{
							choice: '髪の長さ',
							reason: '気遣ってるのが見え見えだから'
						},
						{
							choice: 'アイシャドウ',
							reason: '笑われた気がしたから'
						},
						{
							choice: 'ファンデーション',
							reason: '気遣ってるのが見え見えだから'
						},
						{
							choice: 'シワの数',
							reason: '冗談でも面白くないから'
						},
						{
							choice: 'リップ',
							reason: '気遣ってるのが見え見えだから'
						},
						{ 
							choice: '特になし',
							reason: '気遣ってるのが見え見えだから'
						}
					],
					answer: 'アイシャドウ',
					character: '大人系',
					index: 7
				},
				{ 
					image: { 
						before: 'otona.jpg',
						after: 'otona_af_3.jpeg'
					},
					selections: [
						{
							choice: '髪色',
							reason: '嬉しくて照れちゃうから'
						},
						{
							choice: '前髪',
							reason: '前髪ないから'
						},
						{
							choice: 'ファンデーション',
							reason: '気づくことを密かに期待してたから'
						},
						{
							choice: '年齢',
							reason: 'デリカシーがないから'
						},
						{
							choice: '眉毛',
							reason: '気づくことを密かに期待してたから'
						},
						{ 
							choice: '特になし',
							reason: '気づくことを密かに期待してたから'
						}
					],
					answer: '髪色',
					character: '大人系',
					index: 8
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
			this.question = this.shuffle(this.questions)[0]
			return this.question
		},
		judgeAnswer: function(key) {
			let clickedSelection = this.question.selections[key]
			if (clickedSelection.choice === this.question.answer) {
				this.sharedState.answers.push(this.question.answer)
				this.sharedState.funnyReasons.push(clickedSelection.reason)
				this.sharedState.funnyCharacters.push(this.question.character)
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
	created: function() {
		this.question = this.shuffle(this.questions)[0]
		let quizData = this.sharedState
		quizData.answers = []
		quizData.reasons = []
		quizData.characters = []
	}
}

</script>
<style scoped>
.count-info {
	position: relative;
	left: 10%;
}
.question-wrapper {
	text-align: center;
}
.question-wrapper h1 {
	font-weight: bold;
}
img {
	width: 45%;
	padding: 0 20px 20px;
	max-width: 400px;
	min-width: 250px;
}
.answer-wrapper {
	display: block;
	text-align: center;
}
.answer-options {
	display: inline-grid;
	grid-template-columns: 20% 20%;
	grid-gap: 50px 180px;
	width: 420px;
}
</style>