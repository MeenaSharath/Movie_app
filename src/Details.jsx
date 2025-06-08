import React from 'react';
import { Rating } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { imageUrl } from './Url';

const Details = () => {
  const location = useLocation();
  const { movie, mtype } = location.state || {};

  if (!movie) return <h3 className="mt-5 ms-5">No movie data found.</h3>;

  return (
    <div className='d-flex mt-5 ms-5'>
      <div>
        <img
          src={imageUrl + movie.backdrop_path}
          style={{ height: '500px', width: '600px', objectFit: 'cover' }}
          alt={movie.title || movie.name}
        />
      </div>

      <div
        style={{
          width: '500px',
          marginLeft: '100px',
          textAlign: 'center',
          marginTop: '90px',
        }}
      >
        <h2>{mtype === 'comedy' ? movie.name : movie.title}</h2>
        <h5>Language: {movie.original_language}</h5>
        <h5>
          Released On: {mtype === 'comedy' ? movie.first_air_date : movie.release_date}
        </h5>
        <h5>Overview: {movie.overview}</h5>
        <Rating
          name="customized-10"
          defaultValue={movie.vote_average}
          max={10}
          readOnly
        />
        <br />
        <Link to="/Latest Movies" className="btn btn-primary mt-3">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Details;
