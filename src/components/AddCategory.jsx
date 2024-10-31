import { useState } from "react"

export const AddCategory = ( { onNewCategory } ) => {
    // hook donde agregamos una nueva category
    const [inputValue, setInputValue] = useState('');

    // funcion para manejar el cambio del input value.
    const onInputChange = ({target}) => {
        setInputValue(target.value)
    };

    // funcion para manejar el submit del formulario.
    const onSubmit = (event) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1 ) return;

        onNewCategory( inputValue.trim());
        setInputValue("");
    };
  
    // renderizamos el formulario con la funcion OnSumit, placeholders, value, onchange,etc...
    return (
        <form onSubmit={ onSubmit }>
            <input 
                type='text'
                placeholder='Buscar gifs'
                value={inputValue}
                onChange={ onInputChange }
            />
        </form>
  )
}
