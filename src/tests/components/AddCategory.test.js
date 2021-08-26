import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from "enzyme"
import AddCategory from "../../components/AddCategory"

describe('Prueba addCategory', () => {
   const setCategories = jest.fn();
   let wrapper = shallow(<AddCategory setCategories={setCategories}/>)


   //Reseteamos los valores de nuestros para cada prueba
   beforeEach (() =>{
      //Limpia las funciones
      jest.clearAllMocks();
      //Se vuelve a su estado original
      wrapper = shallow(<AddCategory setCategories={setCategories}/>)
   })



   test('Debe de mostrarse correctamente', () => {
      expect(wrapper).toMatchSnapshot();
   })

   test('Debe de cambiar la caja de texto', () => {
      
      const value = 'Hola Mundo'
      const input = wrapper.find('input')
      //Para poder simular que en el caso de cambiar el valor del input
      //Tenemos un error ya que al momento de hacer la funcion ocurre un error en e.target
      // input.simulate('change')
      //Esta es la solucion para poder evitar ese error
      input.simulate('change',{target:{value}})
      expect(wrapper.find('p').text().trim()).toBe(value)


   })

   test('No debe de poster la informacion OnSubmit', () => {
      //las llaves que se abren al momento de hacer el simulate es para poder acceder,
      //En caso de que esta tenga alguna propiedas (prevent,target)
      wrapper.find('form').simulate('submit',{preventDefault(){}})

      expect(setCategories).not.toHaveBeenCalled()


   })

   test('Debe llamar a setCategories y limpiar la caga de texto', () => {
      
      const value= 'Hola Mundo';
      //1 simular  el inputChange
      wrapper.find('input').simulate('change',{target:{value}});
      //2 Simular el SubMit 
      wrapper.find('form').simulate('submit',{preventDefault(){}})


      //3 Sset Categories Debe ser llamado
      expect(setCategories).toHaveBeenCalled()
      //Verificamos si esta se llama solo una vez
      expect(setCategories).toHaveBeenCalledTimes(1);
      //Verificamos que sea llamado como funcion
      expect(setCategories).toHaveBeenCalledWith(expect.any(Function))

      //4 El valor debe llegar vacio
      //de esta forma podemos acceder a los valores del input y saber si efectivamente al terminar la funcion este quedo vacio
      expect(wrapper.find('input').prop('value')).toBe('')
      


      

   })
   
   
   
   
})
