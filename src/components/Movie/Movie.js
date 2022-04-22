import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';
import './Movie.css';

class Movie extends React.Component {

    componentDidMount(){
        const id = this.props.match.params.id;
        console.log(id)
    }

    componentWillUnmount(){
        this.props.getMovieDetail('')
    }

    render() {
        return (
            <div className='contenedor'>
                <div key={this.props.movie_detail.id} className='movie'>
                    <h1>{this.props.movie_detail.title}</h1>
                    <img src={this.props.movie_detail.poster} alt='Poster' className='img'/>
                    <div className='description'>
                        <p><b>Actores: </b>{this.props.movie_detail.actors}</p>
                        <p><b>Director: </b>{this.props.movie_detail.director}</p>
                        <p><b>Escritores: </b>{this.props.movie_detail.writer}</p>
                        <p><b>Genero: </b>{this.props.movie_detail.genre}</p>
                        <p><b>Año: </b>{this.props.movie_detail.year}</p>
                        <p><b>Calificación: </b>{this.props.movie_detail.rated}</p>
                        <p><b>Duracion: </b>{this.props.movie_detail.runtime}</p>
                        <p><b>Rating: </b>{this.props.movie_detail.rating} {`\u2B50`}</p>
                        <p><b>Sinapsis: </b>{this.props.movie_detail.plot}</p>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        movie_detail : state.movieDetail
    }
}


export default connect(mapStateToProps, {getMovieDetail})(Movie);