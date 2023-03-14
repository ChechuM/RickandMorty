import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Detail() {

  const [character, setCharacter] = useState({
    name: '',
    status: '',
    species: '',
    gender: '',
    origin: '',
    image: '',
  });

  const { detailId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://localhost:3001/rickandmorty/detail/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        setCharacter({
          name: char.name,
          satus: char.status,
          species: char.species,
          gender: char.gender,
          origin: char.origin.name,
          image: char.image
        })
      .catch((error)=>{
        alert('No hay personajes con ese ID')
      })
      })
  }, [detailId]);

  return (
    <div>
      <img src={character.image} />
      <h1>Nombre: {character.name}</h1>
      <div>
        {character.status && <h5>Status: {character.status}</h5>}
        {character.species && <h5>Especie: {character.species}</h5>}
        {character.gender && <h5>Género: {character.gender}</h5>}
        {character.origin && <h5>Origin: {character.origin}</h5>}
      </div>
      {/* <button><NavLink to={'/home'}>Go Back Home!</NavLink></button> */}
      <button onClick={()=>{navigate('/home')}}>Go Back Home!</button>

    </div>
  )
}
