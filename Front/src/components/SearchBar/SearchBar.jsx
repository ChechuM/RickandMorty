import { useState } from 'react';
import './SearchBar.css';

export default function SearchBar(props) {

   const [input, setInput] = useState(0)

   const handleSearch = (event)=> {
      //utiliza el estado local para enviar un ID y utilizar
      let {value} = event.target;
      setInput(value);
   };

   //ojo!!!! si yo escribo la fción onSearch que me pasan por props con el input invocándola se genera UN LOOP INFINITO en el que busca un ID infinitamente!!!! Nos van a banear de la API
   // Ésto pasa porque es el comportamiento que tiene el onClick por defecto
   //entonces para evitar ésto tengo que llamarla con una () =>{} 

   return (
      <div>
         <input type='search' className="input" value={input.id} onChange={handleSearch}/>
      <button onClick={()=> props.onSearch(input)} className='add'>Agregar</button>
      </div>
   );
}

