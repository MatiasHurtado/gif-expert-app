import React, { Fragment, useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";
const GifExpertApp = ({defaultCategories=[]}) => {
  // const categories=['One Push','Samurai X','Dragon Ball'];
  const [categories, setCategories] = useState(defaultCategories);



  return (
    <Fragment>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
    
      <ol>
        {   
          categories.map(category => (
               <GifGrid  key={category}category={category}/>
                
         ))
        }
      </ol>
    </Fragment>
  );
};

export default GifExpertApp;
