import './App.css';
import { React, useState, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail.jsx'
import Error from './components/Error/Error';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites'

// Axs: quiero que cuando se carguen más cards, éstas ocupen sólo un ancho máximo y no se expanda la pantalla

function App() {

  const [characters, setCharacters] = useState([])
  const [access, setAccess] = useState(false)

  const username = 'ejemplo@gmail.com';
  const password = '1password';

  const navigate = useNavigate();
  const location = useLocation();

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
    }
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  function logout() {
    setAccess(false);
    navigate('/');
  }

  function toFav() {
    navigate('/favorites')
  }


  const onSearch = (id) => {
    // fetch(`https://rickandmortyapi.com/api/character/${id}`) // obtiene info de una API pasándole nro de ID
    fetch(`http://localhost:3001/rickandmorty/character/onsearch/${id}`) // tiene que ser puerto 3001 porque se lo estoy pidiendo al back!
      .then((response) => response.json())
      .then((data) => {
        if (data.id) {
          characters.find((elem) => elem.id === data.id) === undefined
            ? setCharacters((characters) => [...characters, data])

            : alert('Personaje repetido, prueba otro ID')
        } else {
          alert('No hay personajes con ese ID.')
        }
      });
  }

  const randomClick = () => {
    let random = Math.floor(Math.random() * 826);
    onSearch(random)
  }

  const onClose = (id) => {
    setCharacters(characters.filter((e) => e.id !== id))
  }

  return (
    <div className='App' style={{ padding: '25px' }}>
      {location.pathname !== '/' && <Nav onSearch={onSearch} randomClick={randomClick} logout={logout} toFav={toFav} />}

      <Routes>
        <Route exact path='/' element={<Form login={login} />} />
        <Route exact path='/home' element={<Cards characters={characters} onClose={onClose} />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/detail/:detailId' element={<Detail />} />
        <Route exact path='/favorites' element={<Favorites />} />
        <Route path='*' element={<Error />} />
      </Routes >
    </div>
  )
}

export default App
