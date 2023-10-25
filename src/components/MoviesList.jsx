import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './moviesList.css';
const MoviesList = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [movieType, setMovieType] = useState([]);
  const [tvType, setTvType] = useState([]);
  const [personType, setPersonType] = useState([]);
  async function getMovies() {
    try {
      const response = await axios.get(
        'https://api.themoviedb.org/3/trending/all/day?api_key=14bdd69ce887376edfafb09f23f78fe9'
      );
      setLoading(false);
      setMovies(response.data.results);

      console.log(movieType);
      console.log(tvType);
      console.log(personType);
      console.log(response.data.results);
    } catch (error) {
      console.error(error);
    }
  }

  const filterMovieType = () => {
    const filtermovie = movies.filter((list) => list.media_type === 'movie');
    setMovieType(filtermovie);
  };
  const filterTvType = () => {
    const filterTv = movies.filter((list) => list.media_type === 'tv');
    setTvType(filterTv);
  };
  const filterPersonType = () => {
    const filterPerson = movies.filter((list) => list.media_type === 'person');
    setPersonType(filterPerson);
  };

  useEffect(() => {
    getMovies();
    filterMovieType();
    filterTvType();
    filterPersonType();
  }, []);
  useEffect(() => {
    if (movies.length > 0) {
      filterMovieType();
      filterTvType();
      filterPersonType();
    }
  }, [movies]);

  if (loading) {
    return <Spinner animation="grow" size="lg" />;
  }

  return (
    <div className="container pt-5 ">
      <h3 className="fw-b mb-5">latest movies & tv shows</h3>
      <div className="movies d-flex container flex-wrap justify-content-between ">
        {movies?.map((movie) => {
          const name = movie.title || movie.name;
          return (
            <div className="movie-card mb-3" key={movie.id}>
              <span className="vote-average fw-bold">{movie.vote_average}</span>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt=""
              />
              <Link
                to={`/${movie.media_type}/${movie.id}`}
                className="movie-title my-2 fw-bold "
              >
                {name}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default MoviesList;

