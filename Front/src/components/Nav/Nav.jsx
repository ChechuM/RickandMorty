import SearchBar from "../SearchBar/SearchBar.jsx";
import './Nav.css'
import nav from '../../images/loginimg.png'
import { NavLink } from "react-router-dom";

export default function Nav(props){
    return(
        <nav className="nav" style={{backgroundImage:`url(${nav})`}}>
            <NavLink to ='/home'>Home</NavLink>
            <NavLink to ='/about'>About</NavLink>
            <SearchBar onSearch={props.onSearch}/>
            <button className="random" onClick={()=>{props.randomClick()}}>Random!</button>
            <button className="logout" onClick={()=>{props.logout()}}>Log Out</button>
            <button className="favorites" onClick={()=>{props.toFav()}}>Favorites❤️</button>
        </nav>
    )
}

