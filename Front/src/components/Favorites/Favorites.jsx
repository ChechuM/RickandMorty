import { useSelector, useDispatch } from "react-redux"
import './Favorites.css';
import { NavLink } from "react-router-dom";
import { orderCards, filterCards } from "../../redux/actions";

export default function Favorites() {
    const dispatch = useDispatch();
    const { myFavorites } = useSelector(state => state)

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    return (
        <div>
            <div>
                <select onChange={handleOrder}>
                    <option value='order' disabled='disabled'>Order By</option>
                    <option value='Ascendente'>Ascendente</option>
                    <option value='Descendente'>Descendente</option>
                </select>
                <select onChange={handleFilter}>
                    <option value='filter' disabled='disabled'>Filter By</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                    <option value='Unknown'>Unknown</option>
                    <option value='Genderless'>Genderless</option>
                </select>
            </div>
            {
                myFavorites.map((char) => {
                    return (
                        <div className='cardDiv'>
                            {
                                <>
                                    <div className='imgName'>
                                        <NavLink to={`/detail/${char.id}`}><h2 className='namePje'>{char.name}</h2></NavLink>
                                        <img src={char.image} alt="Photo of Character" />
                                    </div>
                                    <div className='base'>
                                        <h2 className='specie'>Species: {char.species}</h2>
                                        <h2 className='gender'>Gender: {char.gender}</h2>
                                    </div>
                                </>
                            }
                        </div>
                    )
                })
            }

        </div>
    )
}

