

export const ADD_FAVORITE = 'ADD_FAVORITE'
export const DELETE_FAVORITE = 'DELETE_FAVORITE'
export const FILTER_FAVORITE = 'FILTER_FAVORITE'
export const ORDER_FAVORITES = 'ORDER_FAVORITES'

let id = 0;
export const addFavorite = (char) => {
    return {
        type: ADD_FAVORITE,
        payload: char
    }
}

export const deleteFavorite = (id) => {
    return{
        type: DELETE_FAVORITE,
        payload: id
    }
}

export const filterCards = (gender) => {
    return {
        type: FILTER_FAVORITE,
        payload: gender
    }
}

export const orderCards = (id)=> {
    return {
        type: ORDER_FAVORITES,
        payload: id
    }
}