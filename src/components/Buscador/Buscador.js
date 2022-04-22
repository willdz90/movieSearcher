import React, { Component } from "react";
import { connect } from "react-redux";
// import { Link } from 'react-router-dom';
import './Buscador.css';
import { getMovies, addMovieFavorite } from '../../actions/index.js'

export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
    
  }

  handleChange(event) {
    this.setState({ title: event.target.value });
  
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button onClick={() => this.props.obtainMovie(title)} type="submit">BUSCAR</button>
        </form>
        <ul>
           {
             this.props.movies.moviesLoaded.map((pelicula) => {
               return (
                        <div key={pelicula.imdbID}>
                          <label>
                            {pelicula.Title}
                          </label>
                          <button onClick={() => this.props.addFavMovie(pelicula)}> ♥️ </button>
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
    movies : state
  }
}

function mapDispatchToProps(dispatch){
  return {
    obtainMovie : (titulo) => {dispatch(getMovies(titulo))},
    addFavMovie : (objMovie) => {dispatch(addMovieFavorite(objMovie))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);
