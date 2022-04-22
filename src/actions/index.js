import {ADD_MOVIE_FAVORITE, GET_MOVIES, GET_MOVIES_DETAIL, REMOVE_MOVIE_FAVORITE} from '../actionTypes/actionTypes'

const { REACT_APP_API_KEY } = process.env;

//ACTIONS CREATORS
export function getMovies(titulo) {
    return function(dispatch) {
      return fetch(`http://www.omdbapi.com/?apikey=${REACT_APP_API_KEY}&s=${titulo}`)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: GET_MOVIES, payload: json.Search });
        });
    };
  }


export function getMovieDetail(id){
    return function(dispatch) {
        return fetch(`http://www.omdbapi.com/?apikey=${REACT_APP_API_KEY}&i=${id}`)
          .then(response => response.json())
          .then(json => {
            const objPeli = {
              id : json.imdbID,
              title : json.Title,
              poster : json.Poster,
              actors : json.Actors,
              director : json.Director,
              writer : json.Writer,
              genre : json.Genre,
              year : json.Year,
              rated : json.Rated,
              runtime : json.Runtime,
              rating : json.imdbRating,
              plot : json.Plot
              }
            return dispatch({
              type: GET_MOVIES_DETAIL,
              payload: objPeli
            })
        });
    }
}

export function addMovieFavorite(payload) {
    return { type: ADD_MOVIE_FAVORITE,
             payload};
}

export function removeMovieFavorite(id){
    console.log(id)
    return {
        type: REMOVE_MOVIE_FAVORITE,
        payload: id
    }
}
