import { shallowMount } from '@vue/test-utils'
import Item from '@/components/Item'

describe('Item.vue', () => {
  /* it('renders item.url', () => {

    const item = {
      url: 10
    }
    const wrapper = shallowMount(Item, {
      propsData: {
        item: {}
      }
    })
    expect(wrapper.text()).toContain(item.url)
  }), */
  it('renders item',() => {
    const Ctor = Vue.extend(Item)

    const vm = new Ctor().$mount()

    expect(vm.$el.textContent).toContain('item')

  })
})