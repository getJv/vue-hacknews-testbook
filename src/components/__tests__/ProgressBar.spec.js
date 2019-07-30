import { shallowMount } from '@vue/test-utils'
import ProgressBar from '@/components/ProgressBar'



describe('ProgressBar.vue', () => {

  const wrapper = shallowMount(ProgressBar)

  beforeEach(() => {
    jest.useFakeTimers()
  }),

    it('Está oculta ao inicializar', () => {
      expect(wrapper.classes()).toContain('hidden')
    }),
    it('Está com width:0% no ao inicializar', () => {
      expect(wrapper.element.style.width).toBe('0%')
    })

    ,
    it('Oculta o hidden ao invocar start()', () => {
      wrapper.vm.start()
      expect(wrapper.classes()).not.toContain('hidden')
    })
    ,
    it('Progresso de 1% a cada 100ms', () => {
      wrapper.vm.start()
      jest.runTimersToTime(100)
      expect(wrapper.element.style.width).toBe('2%')

      jest.runTimersToTime(900)
      expect(wrapper.element.style.width).toBe('20%')

      jest.runTimersToTime(4000)
      expect(wrapper.element.style.width).toBe('100%')



    })

    ,
    it('Width = 100% quando o finish é chamado', () => {
      wrapper.vm.finish()
      expect(wrapper.element.style.width).toBe('100%')
    })

    ,
    it('Ocultou a barra após o finish()', () => {
      expect(wrapper.classes()).toContain('hidden')
    })

    ,
    it('Limpando o temporizador apos o finish()', () => {
      jest.spyOn(window,'clearInterval')
      setInterval.mockReturnValue(123)
      wrapper.vm.start()
      wrapper.vm.finish()
      expect(window.clearInterval).toHaveBeenCalledWith(123)

    })

    ,
    it('Apresenta valor 0% ao chamar o start', () => {
      wrapper.vm.start()
      expect(wrapper.element.style.width).toBe('0%')
    })







})