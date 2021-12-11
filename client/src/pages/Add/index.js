import React, { useState } from 'react';
import { ContainerAdd } from './styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Add() {

  const [name, setName] = useState("")
  const [profession, setProfession] = useState("")
  const [photo, setPhoto] = useState(null)
  
  const navigate = useNavigate();


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
    <ContainerAdd>
      <form 
      onSubmit={
        (e) => handleSubmit(e)
      }>

      <div className="center">
        <h1>Create user</h1>
      </div>

        <div className="field">
          <label>Your name</label>
          <input 
            type="text" 
            required
            onChange={(e) => setName(e.target.value)}
            />
        </div>
        <div className="field">
          <label>Your profession</label>
          <input 
           type="text" 
           required
           onChange={(e) => setProfession(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Photo URL</label>
          <input type="text" 
           onChange={(e) => setPhoto(e.target.value)}
          
          />
        </div>

        <div className="center buttons">
            <a href="/" className="back">BACK</a>
            <button type="submit">CREATE</button>
        </div>

      </form>
    </ContainerAdd>
  );
}
