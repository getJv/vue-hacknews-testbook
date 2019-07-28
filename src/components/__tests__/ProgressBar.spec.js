import { shallowMount } from '@vue/test-utils'
import ProgressBar from '@/components/ProgressBar'


describe('ProgressBar.vue', () => {

  const wrapper = shallowMount(ProgressBar)

  it('Está oculta ao inicializar', () => {
    expect(wrapper.classes()).toContain('hidden')
  }), 
  it('Está com width:0% no ao inicializar', () => {
    expect(wrapper.element.style.width).toBe('0%')
  })







})