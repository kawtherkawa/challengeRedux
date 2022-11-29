import React from 'react'
import { Card,Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

import { deleteMovies } from '../../JS/Actions/MovieList' 
const MovieCard = ({movie}) => {
  const dispatch=useDispatch(movie.id)
  return (
    
    <div >

<Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={movie.posterUrl} />
        <Card.Body>
         
          <Card.Text>
            {movie.title}
          </Card.Text>
          <Card.Text>
            {movie.description}
          </Card.Text>
          <Card.Text>
            {movie.Type}
          </Card.Text>
<Button onClick={()=>dispatch(deleteMovies())}>delete</Button>
         
        </Card.Body>
      </Card>

    </div>
  )
}

export default MovieCard