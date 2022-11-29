import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from '../MovieCard/MovieCard'
import './MovieList.css'
const MovieList = () => {

  const list=useSelector(state=>state.listReducer.MoviesData)
  return (
    <div className='List-flex'>
      {list.map(el=><MovieCard movie={el} key={el.id}/>)}
    </div>
  )
}

export default MovieList