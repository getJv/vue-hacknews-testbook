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

  const $bar = {
    start: jest.fn(),
    finish: jest.fn()
  }

  const wrapper = shallowMount(ItemList, {
    mocks: {
      $bar
    },
    beforeMount(){
      this.$bar.start()
    }
  })

  const items = wrapper.findAll(Item)

  it('Renderização de componentes filhos', () => {
    expect(items).toHaveLength(itemList.length)
  }),
    it('Repasse de informação ao componentes filhos', () => {

      items.wrappers.forEach((wrapper, i) => {
        expect(wrapper.props().item).toEqual(itemList[i])
      });
    })
    ,
    it('Inicia a barra de carregamento no inicio', () => {

        expect($bar.start).toHaveBeenCalledTimes(1) 

    })







})