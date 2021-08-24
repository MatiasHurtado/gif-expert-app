import React, { useState } from "react";
import PropTypes from 'prop-types';

export default function AddCategory({setCategories}) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {

    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
      e.preventDefault()

      if(inputValue.trim().length > 2){
          //Esto nos permite modificar en nuestro state que viene de GifExpert la propiedad categories sin llamarla si es que no la llegaramos a necesitar
          //De acuerdo a como ordenemos nuestro [] es como se mostrara el resultado en este caso le estamos diciendo que el input value se sera el primer argumento y despues
          //Seguido de la copia del state
      setCategories((cate) => [inputValue,...cate, ]);
      setInputValue('')
      }
     
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
}


AddCategory.propTypes ={
    setCategories: PropTypes.func.isRequired
}