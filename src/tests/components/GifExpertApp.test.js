import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from "enzyme"
import GifExpertApp from '../../GifExpertApp';
import GifGrid from '../../components/GifGrid';


describe('Test GiftExperApp', () => {

   

   test('Verificar Si todos los datos de GifExpertApp se renderizen completamente', () => {

      const wrapper = shallow(<GifExpertApp />)

            expect(wrapper).toMatchSnapshot();
      
   })


   test('Debe de mostrar una Lista de Categorias ', () => {
      
      const categories = ['One Punch', 'Dragon Ball'];

      const wrapper = shallow(<GifExpertApp  defaultCategories={ categories }/>)

      expect(wrapper).toMatchSnapshot()

      expect(wrapper.find('GifGrid').length).toBe( categories.length );

   })
   
   
   
})
