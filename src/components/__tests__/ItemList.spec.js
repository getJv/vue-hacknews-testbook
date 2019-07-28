import { shallowMount } from '@vue/test-utils'
import Item from '@/components/Item'
import ItemList from '@/views/ItemList'

describe('ItemList.vue', () => {

  const itemList = [
    {
      url: 'https://terra.com.br',
      author: 'Jhonatan Morais',
      score: 10,
      title: 'Site de notícias bobas'
    }, {
      url: 'https://www.cade.com.br',
      author: 'Jhonatan Morais',
      score: 1000,
      title: 'Saudoso site de Buscas'
    }
  ]

  const wrapper = shallowMount(ItemList)
  const items = wrapper.findAll(Item)

  it('Renderização de componentes filhos', () => {
    expect(items).toHaveLength(itemList.length)
  }),
    it('Repasse de informação ao componentes filhos', () => {

      items.wrappers.forEach((wrapper, i) => {
        expect(wrapper.props().item).toEqual(itemList[i])
      });
    })







})