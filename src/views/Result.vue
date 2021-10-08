<template>
	<div class="container col-md-10 my-12">
		<v-card
			class="card py-10 my-5"
			color="rgba(71, 187, 207, 0.2)"
			outlined
		>
		<div class="result"
			v-if='sharedState.characters[0] != null 
				|| sharedState.funnyCharacters[0] != null'
		>
			<div v-if='badCase'>
				<h1>全問不正解！</h1>
			</div>
			<div v-else-if='goodCase'>
				<h1>全問正解！</h1>
				<h1>ですが...</h1>
			</div>
			<div v-else>
				<h1>3問中{{ sharedState.answers.length }}問正解！</h1>
			</div>
			<div v-if='goodCase'>
				<h1>「{{ sharedState.funnyCharacters[0] }}」に怒られてしまいました</h1>
				<h1>理由は「{{ sharedState.funnyReasons[0] }}」でした</h1>
			</div>
			<div v-else>
				<h1>「{{ sharedState.characters[0] }}」に怒られてしまいました</h1>
				<h1>理由は「{{ sharedState.reasons[0] }}」でした</h1>
			</div>
		</div>
		<div v-else>
			<h1 class="py-16 my-16">怒られない時が来るといいですね。
			</h1>
		</div>
		<div class="button mt-8">
			<router-link
				to="/"
				class="link top"
			>
				<v-btn
					large
					depressed
				>
					トップへ戻る
				</v-btn>
			</router-link>
			<router-link
				to="/quiz"
				class="link quiz"
			>
				<v-btn
					large
					depressed
				>
					もう一度
				</v-btn>
			</router-link>
			<v-btn
				large
				depressed
				class="twitter-share-button"
				:href=twitter
				target="_blank"
				rel="noopener"
				@click='makeText(sharedState)'
			>
				<font-awesome-icon :icon="['fab', 'twitter']" class="twitter" />
				Twitterで呟く
			</v-btn>
		</div>
		</v-card>
	</div>
</template>

<script>
import store from '../store'
export default {
	name: 'Result',
	data: function(){
		return {
			sharedState: store.state,
			twitter: "https://twitter.com/intent/tweet?hashtags=GirlsQuiz&text=あなたは何問正解できる？" 
		}
	},
	computed: {
		badCase: function() {
			return this.sharedState.answers.length == 0
		},
		goodCase: function() {
			return this.sharedState.answers.length == 3
		}
	}
}
</script>

<style scoped>
.container {
	text-align: center;
	font-family: 'Courier New', Courier, monospace;
}
.result h1{
	font-size: 2rem;
	padding: 20px 0;
}
.button {
	padding: 10px;
}
.twitter {
	margin-right: 5px;
	color: rgb(29,161,242);
}
.link {
	text-decoration: none;
	margin-right: 30px;
}
.card {
	height: 500px;
}
</style>