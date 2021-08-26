import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from "enzyme"
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');


describe('Pruebas a GifGrid', () => {
   
   const category ='One Punch'



   test('Debe Mostrarse GifGrid Correctamente', () => {

      useFetchGifs.mockReturnValue({
         data: [],
         loading: true
      })

      const wrapper = shallow(<GifGrid category={category}/>)
      expect(wrapper).toMatchSnapshot();
      
   })

   test('Debe de mostrar items cuando se catgan las imagenes en UseFetchGifs', () => {
      
      const gifs =[{
         id:'112',
         url:'https://localHost/aaaaa',
         title:'Cualquier Cosa'
      }]
      
      useFetchGifs.mockReturnValue({
         data: gifs,
         loading: false
      })

      const wrapper = shallow(<GifGrid category={category}/>)
      //Forma Facil de ver si nuestro componente funciona perfectamente

      expect(wrapper.find('p').exists()).toBe(false);
      expect(wrapper.find('GifGridItem').length).toBe(gifs.length)

   })
   
   

})
