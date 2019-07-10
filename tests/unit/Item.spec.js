import { shallowMount } from '@vue/test-utils'
import Item from '@/components/Item'

describe('Item.vue', () => {
  it('renders Item component', () => {
    
    const wrapper = shallowMount(Item, {
      propsData: { 
          item:{}
       }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})