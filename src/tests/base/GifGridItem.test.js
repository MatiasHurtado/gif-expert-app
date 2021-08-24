import GifGridItem from "../../components/GifGridItem";
import "@testing-library/jest-dom";
import React from "react";
import { shallow } from "enzyme";

describe("Pruebas en GifGridItems ", () => {
 
  const title = "Hola Soy Goku";
  const url = "Hola Soy Goku";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);
  //Esta primera instancio lo que hace es tomar la foto de nuestro componente renderizado
  test("Debe mostrar Correctamente GifGridItems", () => {
     
      expect(wrapper).toMatchSnapshot();
    
  });
  test('Debe de tener un parrafo con el title', () => {
      const p = wrapper.find('p');
      expect(p.text().trim()).toBe(title)
  })
  test('Debe de tenewr la imagen igual al url y alt de los Props', () => {
      const img = wrapper.find('img');
      //Con la propiedad html puedo accider a los valores de img 
      //console.log(img.html());
      expect(img.prop('src')).toBe(url);
      expect(img.prop('alt')).toBe(title);
  })
  test('Debe de contener la animacion card animate', () => {
   const animacion ="card animate__animated animate__bounce animate__delay-1s" ;
   const  div = wrapper.find('div');
   //   console.log(div.html())
   // console.log(div.prop('className'))
   //Forma Propuesta por mi
   expect(div.prop('className')).toBe(animacion);

   //Forma Propuesta por Fernando Herrera
   const  className = div.prop('className');
   expect(className.includes('animate__bounce')).toBe(true)
  })
  
  


});
