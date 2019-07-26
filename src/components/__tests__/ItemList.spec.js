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
    },{
      url: 'https://www.cade.com.br',
      author: 'Jhonatan Morais',
      score: 1000,
      title: 'Saudoso site de Buscas'
    }
  ]
  
  const wrapper = shallowMount(ItemList)
  

  it('Renderizou o componente', () => {

    //expect(wrapper.findAll(Item)).toHaveLength(itemList.length)
    expect(wrapper.findAll(Item)).toHaveLength(itemList.length)
  })

    

    



})