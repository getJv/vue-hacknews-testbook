import { shallowMount } from '@vue/test-utils'
import Item from '@/components/Item'

describe('Item.vue', () => {
  it('renders item', () => {

    const wrapper = shallowMount(Item)
    expect(wrapper.text()).toContain('item')
  })
})