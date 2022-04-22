import React, { Component } from "react";
import { connect } from "react-redux";
import { removeMovieFavorite } from "../../actions";
import { Link } from 'react-router-dom';
import './Favorites.css';

export class ConnectedList extends Component {

  render() {
    console.log(this.props.movies)
    return (
      <div>
        <h1>Películas Favoritas</h1>
        <ul className="contenedor">
          {
            this.props.movies.map((pelicula) => {
              return (
                <div key={pelicula.imdbID}>
                  <Link to={`/movie/${pelicula.imdbID}`}>
                    <img src={pelicula.Poster} alt="poster"/>
                    <button onClick={() => this.props.removerPelicula(pelicula.imdbID)}> X </button>
                    <p>
                      {pelicula.Title}<br/>
                      {pelicula.Year}
                    </p>
                  </Link>
                </div>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    movies : state.moviesFavourites
  }
}

function mapDispatchToProps(dispatch){
  return {
    removerPelicula : (id) => { dispatch(removeMovieFavorite(id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
