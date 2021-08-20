<template>
	<div class="container col-md-10">
		<div class="result my-12">
			<h1>5問中{{ NumberResult }}問正解でした</h1>
			<h1>「{{ result.charactor }}」に怒られてしまいました</h1>
			<h1>理由は「{{ result.detail }}」でした</h1>
		</div>

		<div class="button">
			<v-btn
				large
				depressed
			>
				トップへ戻る
			</v-btn>
			<v-btn
				large
				depressed
			>
				もう一度
			</v-btn>
			<v-btn
				large
				depressed
			>
				Twitterで呟く
			</v-btn>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Result',
	data: function(){
		return {
			NumberResult: 1,
			result: {
				charactor: 'メンヘラ',
				detail: '今は話しかけないで欲しいから'
			}
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
</style>