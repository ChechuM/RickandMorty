import Card from '../Card/Card';
import './Cards.css'

export default function Cards(props) {
   const { characters } = props;
   return <div className='divCards'> {
            characters.length === 0
               ? (<p>Buscá un personaje!</p>)
               : characters.map(c =>
                  <Card
                     id={c.id}
                     name={c.name}
                     species={c.species}
                     gender={c.gender}
                     image={c.image}
                     onClose={() => props.onClose(c.id)}
                     key={c.id}
                     className='cardDiv'
                  />
               )
         }
   </div>
}

