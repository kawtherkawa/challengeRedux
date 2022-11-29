
import React,{useState} from 'react'
import { Button,Modal,Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {addMovies} from '../../JS/Actions/MovieList'
const AddMovie = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const [id,setId]=useState("")
  const [title, setTitle] = useState("")
  const [rate, setRate] = useState("")
  const [description, setDescription] = useState("")
  const [posterUrl, setPosterUrl] = useState("")
const [newmovie,setNewmovie]=useState({})
 const handleChange=(e)=>{
  setNewmovie({...newmovie,[e.target.name]:e.target.value} )
}
  const dispatch=useDispatch()
  const handleAdd=(e)=>{
    e.preventDefault()
    let newmovie={id,title,description,rate,posterUrl}
    dispatch(addMovies(newmovie))
  }

  return (
    <div>

<Button variant="primary" onClick={handleShow}>
        Add movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Title</Form.Label>
          <Form.Control type="number" placeholder="Enter id" name='id' onChange={handleChange}/>

          <Form.Control type="text" placeholder="Enter your title" name='title' onChange={handleChange}/>
          <Form.Label>rate</Form.Label>
          <Form.Control type="number" placeholder="Enter your rate" name='rate' onChange={handleChange}/>
          <Form.Label>description</Form.Label>
          <Form.Control type="text" placeholder="Enter your description"  name='description' onChange={handleChange} />
          <Form.Label>posterUrl</Form.Label>
          <Form.Control type="url" placeholder="Enter your posterUrl"  name='posterUrl' onChange={handleChange}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClicK={handleAdd}>
            Add movie
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddMovie