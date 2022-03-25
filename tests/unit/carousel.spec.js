import { mount } from '@vue/test-utils'
import Carousel from '@/components/Carousel.vue'

// Create a factory func to test all props
const factory = (props) => {
  return mount(Carousel,{
    props: {
      ...props,
    }
  })
}

describe('Carousel.vue', () => {
  it('renders nav-slide when nav is true', () => {
    const wrapper = factory({ nav: true })
    expect(wrapper.html().includes('<div class="nav-slide">')).toBe(true)
  })

  it('renders pag-slide when pag is true', () => {
    const wrapper = factory({ pag: true })
    expect(wrapper.html().includes('<div class="pag-slide">')).toBe(true)
  })
})
