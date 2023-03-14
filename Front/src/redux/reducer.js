import { ADD_FAVORITE, DELETE_FAVORITE, FILTER_FAVORITE, ORDER_FAVORITES} from './actions'

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            return {
                ...state,
                myFavorites: [...state.allCharacters, action.payload],
                allCharacters: [...state.allCharacters, action.payload ]
            }
        case DELETE_FAVORITE:
            return {
                ...state,
                allCharacters: state.allCharacters.filter((f) => f.id !== action.payload)
            }
        case FILTER_FAVORITE:
            const allCharsFiltered = state.allCharacters.filter(char => char.gender === action.payload)
            return {
                ...state,
                myFavorites: allCharsFiltered
            }
        case ORDER_FAVORITES:
            return {
                ...state,
                myFavorites:
                    action.payload === 'Ascendente'
                    ? state.allCharacters.sort((a,b) => a.id - b.id)
                    : state.allCharacters.sort((a,b) => b.id - a.id)
            }
        default: return {
            ...state
        };
    }
}

export default rootReducer;