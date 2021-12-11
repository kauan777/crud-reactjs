import React, { useEffect, useState } from 'react';
import { ContainerEdit } from './styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';

export default function Edit() {

  const [name, setName] = useState("")
  const [profession, setProfession] = useState("")
  const [photo, setPhoto] = useState(null)

  const { code } = useParams()
  
  const navigate = useNavigate();
  
  async function getProductId(){
    const { data } = await axios.get(`http://localhost:5000/users/${code}`)
    setName(data.name_user)
    setProfession(data.func_user)
    setPhoto(data.photo_user)

  }

  async function updateUser(e){
    e.preventDefault();
    await axios.patch(`http://localhost:5000/users/${code}`,{
      name_user: name,
      func_user: profession,
      photo_user: photo
    })

    navigate("/")
  }

  useEffect(()=>{
    getProductId()
  },[])


  async function handleSubmit(e){
    e.preventDefault()
    axios.post('http://localhost:5000/users',{
      name_user: name,
      func_user: profession,
      photo_user: photo
    })
    navigate("/")
  }

  return (
    <ContainerEdit>
      <form 
      onSubmit={
        (e) => handleSubmit(e)
      }>

      <div className="center">
        <h1>Edit user</h1>
      </div>

        <div className="field">
          <label>Your name</label>
          <input
            value={name}
            type="text" 
            required
            onChange={(e) => setName(e.target.value)}
            />
        </div>
        <div className="field">
          <label>Your profession</label>
          <input 
            value={profession}
           type="text" 
           required
           onChange={(e) => setProfession(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Photo URL</label>
          <input type="text" 
            value={photo}
           onChange={(e) => setPhoto(e.target.value)}
          
          />
        </div>

        <div className="center buttons">
            <a href="/" className="back">BACK</a>
            <button onClick={(e) => updateUser(e)} type="submit">SAVE</button>
        </div>

      </form>
    </ContainerEdit>
  );
}
