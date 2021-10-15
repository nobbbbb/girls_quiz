import { shallowMount, createLocalVue } from '@vue/test-utils'
import Question from "@/views/Question.vue"

const localVue = createLocalVue()

describe('Question.vue', () => {
	const wrapper = shallowMount(Question, {
		localVue
	})
	it("クイズが正しく表示されている", function(){
		const img = wrapper.find('img[title="girls-before"]')
		const btn = wrapper.find('.answer-option')
		expect(img.isVisible()).toBe(true)
		expect(btn.isVisible()).toBe(true)
	})
})