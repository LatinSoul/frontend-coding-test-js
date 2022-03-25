import { mount } from '@vue/test-utils'
import Toast from '@/components/Toast.vue'

describe('Toast.vue', () => {
  it('emits a close event on click', () => {
    const wrapper = mount(Toast)
    wrapper.vm.emitEvent()
    expect(wrapper.emitted('close')).toBeTruthy()
  })
})
