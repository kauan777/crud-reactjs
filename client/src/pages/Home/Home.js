import React, { useEffect, useState } from 'react';
import { BoxHome, ContainerHome } from './styles';
import axios from 'axios'
import { BoxUser } from '../../components/BoxUser/styles';
import background from '../../assets/user.jfif'
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

function Home() {
  const [users, setUsers] = useState([])

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("http://localhost:5000/users")
      setUsers(data)
    })();
  }, [users])

  
  async function DeleteUser(e,code){
    e.preventDefault()
    axios.delete(`http://localhost:5000/users/${code}`)
    navigate("/")
  }

  return (
    <ContainerHome>
      <div className="introduction">
        <h1>All users - CRUD NODEJS</h1>
        <button className="add" onClick={()=> navigate("/add")}>Add</button>  
      </div>
      <BoxHome as={motion.section} variants={container} initial="hidden" animate="visible">
        {users.map((user) => {
          return (
            <BoxUser key={user.cd_user} as={motion.div} variants={item}>
              <div className="info-user">
                <img src={user.photo_user || background} alt="sem" />
                <span>{user.name_user}</span>
              </div>
              <span>{user.func_user}</span>

              <div className="buttons">
                <button onClick={() => navigate(`/edit/${user.cd_user}`)}>
                  Edit
                </button>
                <button onClick={ (e) => DeleteUser(e, user.cd_user) } className="delete">
                  Delete
                </button>
              </div>
            </BoxUser>
          )
        })}
      </BoxHome>
    </ContainerHome>
  );
}

export default Home;