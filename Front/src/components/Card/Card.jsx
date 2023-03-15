import { NavLink } from 'react-router-dom';
import './Card.css';
import { addFavorite, deleteFavorite } from '../../redux/actions';
import { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

export default function Card({ name, gender, onClose, species, image, id }) {
   const dispatch = useDispatch();
   const {allCharacters} = useSelector(state => state);
   const [isFav, setisFav] = useState(false)

   function handleFavorite() {
      if (isFav) {
         setisFav(false)
         dispatch(deleteFavorite(id))
         // aquí tengo que poner el axios para enviar el método delete al localhost
         // axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`); // conexión con el back 

      }
      if (!isFav) {
         setisFav(true)
         dispatch(addFavorite({ name, gender, onClose, species, image, id }))
         // aquí tengo que poner el axios para enviar el método delete al localhost
         // axios.post(`http://localhost:3001/rickandmorty/fav/${id}`); // conexión con el back 
      }
   }

   useEffect(() => {
      allCharacters.forEach((fav) => {
         if (fav.id === id) {
            setisFav(true);
         }
      });
   }, [allCharacters, id]);

   return (
      <div key={id} className='upperDiv'>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <div className='cardDiv'>
            {
               <>
                  <div className='imgName'>
                     <button onClick={onClose} className='btnX'>
                        X
                     </button>
                     <NavLink to={`/detail/${id}`}><h2 className='namePje'>{name}</h2></NavLink>
                     <img src={image} alt="Photo of Character" />
                  </div>
                  <div className='base'>
                     <h2 className='specie'>Species: {species}</h2>
                     <h2 className='gender'>Gender: {gender}</h2>
                  </div>
               </>
            }
         </div>
      </div>
   );
}
