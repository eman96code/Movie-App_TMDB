import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddIcon from '@mui/icons-material/Add';
import './details.css';
const Details = () => {
  const params = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  async function getMovieDetails() {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/${params.media_type}/${params.id}?api_key=14bdd69ce887376edfafb09f23f78fe9`
      );
      setMovieDetails(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getMovieDetails();
  }, []);
  const name = movieDetails.title || movieDetails.name;
  return (
    <div className="movieDetails">
      <img
        className="backdropImg"
        src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movieDetails.backdrop_path}`}
        alt=""
      />

      {/* style={{
          background: `url('https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movieDetails.backdrop_path}')`,
          backgroundRepeat:'no-repeat'
        }} */}
      <div className="details-page">
        <div className="container d-flex justify-content-between">
          <div className="details-img">
            <img
              className="posterImg"
              src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
              alt=""
            />
          </div>
          <div className="detailsText">
            <p>{movieDetails.release_date}</p>
            <h3>{name}</h3>
            <p>{movieDetails.overview}</p>
            <div className="watch">
              <PlayCircleOutlineIcon />
              <span className="ms-2">watch the trailer</span>
              <p>
                {movieDetails.runtime} minutes.{movieDetails.release_date}
              </p>
              <div className="bottom-section d-flex justify-content-between">
              <div className="left-section d-flex justify-content-center align-items-center">
                <div className='vote d-flex justify-content-center align-items-center flex-column'>
                  <h3>{movieDetails.vote_average} </h3><p>IMDb</p>
                </div>
                <div className="status d-flex justify-content-center flex-column align-items-center">
                  <span>status</span>
                  <h4>{movieDetails.status}</h4>
                </div>
              </div>
              <div className="buttons">
                <button className="adding">
                  <AddIcon  className='AddIcon'/>
                </button>
                <button className="like">
                  <FavoriteBorderIcon className='FavoriteBorderIcon' />
                </button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Details;
