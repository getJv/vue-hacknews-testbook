import { shallowMount } from '@vue/test-utils'
import Item from '@/components/Item'

describe('Item.vue', () => {

  const item = {
    url: 'https://terra.com.br',
    author: 'Jhonatan Morais',
    score: 10,
    title: 'Site de notícias bobas'
  }
  const wrapper = shallowMount(Item, { propsData: { item } })

  it('Renderizou o componente', () => {

    expect(wrapper.text()).toContain('item')
  }),

    it('Apresentou a url', () => {
      expect(wrapper.text()).toContain(item.url)
    }),

    it('Apresentou a titulo', () => { 
      expect(wrapper.text()).toContain(item.title)
    }),

    it('Apresentou a nome do autor', () => {
      expect(wrapper.text()).toContain(item.author)
    }),

    it('Apresentou o score', () => {
      expect(wrapper.text()).toContain(item.score)
    }),

    it('Apresentou o título como um link para a url', () => {
      const a = wrapper.find('a') 

      expect(a.attributes().href).toBe(item.url)
      expect(a.text()).toContain(item.title)
    
    })

    



})