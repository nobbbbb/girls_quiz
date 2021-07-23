import Vue from 'vue'
import VueRouter from 'vue-router'
import Top from '../views/Top.vue'
import Question from '../views/Question.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Top',
    component: Top
  },
	{
		path: '/quiz',
		name: 'Question',
		component: Question
	}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
