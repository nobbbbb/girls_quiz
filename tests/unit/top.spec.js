import { shallowMount, createLocalVue } from '@vue/test-utils'
import Top from "@/views/Top.vue"
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

describe('Top.vue', () => {
	const wrapper = shallowMount(Top, {
		localVue,
		router,
		stubs: ['router-link', 'router-view']
	})

	it("タイトルが表示されている", function(){
		const title = wrapper.find('.app-title')
		expect(title.text()).toBe('Girls Quiz')
	})
	it("スタートボタンが表示されている", function(){
		const btn = wrapper.find('.start-button')
		expect(btn.text()).toBe('Start')
	})
})