import { useState} from "react";

import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

  // Definimos el hook
  const [ categories, setCategories ] = useState(['One Punch']);

  // funcion que agrega una categoria
  const onAddCategory = ( newCategory) => {

    if (categories.includes(newCategory)) return;

    setCategories( [ newCategory, ...categories] )
  };


  return (
    <>
        <h1> Gif Expert App </h1>

      <AddCategory 
        onNewCategory={ (value) => onAddCategory( value ) }
      />

      { 
        categories.map( (category) => (
            <GifGrid 
              key={ category }
              category={ category } />
        ))
      }

    </>
  )
}
