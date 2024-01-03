import React from 'react';
import PropTypes from 'prop-types';
import {useState} from "react";



function Movie({name, image, rating, likes}) {


  return (
    <div class ='div'>
      <h2> I Like {name} </h2>
      <button>Likes : {likes}</button>
      <h4>rating : {rating} / 5</h4>
      <img src={image} alt={name}/>

    </div>
    
  )  
}
  const MovieILike = [
    {
      id: 1,
      name: 'Avengers',
      image: 'https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg',
      rating: 5,
      likes: 0,

    },
    {
      id: 2,
      name: 'Star Wars',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq1BrE_IUY7jF_7nXYmu7YQC3wvGSF8fLn7g&usqp=CAU',
      rating: 4.2,
      likes: 0,
    },
    {
      id: 3,
      name: 'Joker',
      image: 'https://upload.wikimedia.org/wikipedia/en/e/e1/Joker_%282019_film%29_poster.jpg',
      rating: 5,
      likes: 0,
    },
    {
      id: 4,
      name: 'Parasite',
      image: 'https://upload.wikimedia.org/wikipedia/en/5/53/Parasite_%282019_film%29.png',
      rating: 5,
      likes: 0,
    },
    {
      id: 5,
      name: 'Dunkirk',
      image: 'https://upload.wikimedia.org/wikipedia/en/1/15/Dunkirk_Film_poster.jpg',
      rating: 5,
      likes: 0,
    },
  ];

function renderMovie(movie) {
  return <Movie key={movie.id} name= {movie.name} image={movie.image} rating={movie.rating} likes={movie.likes}/>
  }

function App() {
  console.log(MovieILike.map(renderMovie));
  return (
    <div>
      {MovieILike.map(renderMovie)}
    </div>
  );
}

Movie.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number,
  likes: PropTypes.number,
}

export default App;
