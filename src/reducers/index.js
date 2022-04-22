import { ADD_MOVIE_FAVORITE, GET_MOVIES, GET_MOVIES_DETAIL, REMOVE_MOVIE_FAVORITE } from "../actionTypes/actionTypes";

const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {}
  };

function rootReducer(state = initialState, action) {

    switch (action.type) {
        case ADD_MOVIE_FAVORITE:
            return {
                ...state,
                moviesFavourites: state.moviesFavourites.concat(action.payload)
                }
        case GET_MOVIES:
            return {
                ...state,
                moviesLoaded: action.payload
                };
        
        case REMOVE_MOVIE_FAVORITE:
            return {
                ...state,
                moviesFavourites : state.moviesFavourites.filter( (pelicula) => pelicula.imdbID !== action.payload )
            }
        
        case GET_MOVIES_DETAIL:
            return {
                ...state,
                movieDetail: action.payload
            }

        default: return state;
    }
}
  export default rootReducer;