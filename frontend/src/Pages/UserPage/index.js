import React, { useEffect, useState } from 'react';
import './index.css';

import Input from '../../Components/Input';
import Button from '../../Components/Button';
import Board from '../../Components/Board';

import backgroundImage from '../../assets/user-page.jpg';

import api from '../../services/api';
import { useHistory } from 'react-router-dom';

export default function UserPage() {
   const history = useHistory();
   const [boards, setBoards] = useState([]);
   const [modalVisible, setModalVisible] = useState(false);
   const [newBoardName, setNewBoardName] = useState('');

   const token = localStorage.getItem("token");
   const firstname = localStorage.getItem('firstname');

   const config = {
      headers: { Authorization: `Bearer ${token}` },
   };

   useEffect(() => {
      api.get(`/boards`, config).then(response => {
         if (response.data.userBoards != null) {
            setBoards(response.data.userBoards);
         }
      }, () => {
         alert('Acess Denied');
         history.push('/');
      });
   });

   function handleNewBoard() {
      setModalVisible(true);
   }

   async function createNewBoard() {
      try {
         await api.post(`/boards`, {
            title: newBoardName
         }, config);
         setModalVisible(false);
         setNewBoardName('');
      } catch (error) {
         alert("Problem registering user, try again later");
      }
   }

   return (
      <div id='user-page'>
         <div className='modal'>
            <img
               className={`background-image ${modalVisible ? 'modal-background' : ''}`}
               src={backgroundImage}
               alt='background'
            />
         </div>
         <header className={`page-header ${modalVisible ? 'modal-background' : ''}`}>
            <h1 className='title'>{`Welcome, ${firstname}`}</h1>
            <button onClick={handleNewBoard}>+ New Board</button>
         </header>
         <div className={`boards ${modalVisible ? 'modal-background' : ''}`}>
            {boards.map(board => {
               return <Board key={board._id} postid={board._id} label={board.title}/>
            })}
         </div>
         <div className={`newboard-modal ${modalVisible ? '' : 'hidden'}`}>
            <div className='newboard-input'>
               <label>Name</label>
               <Input
                  type="text"
                  value={newBoardName}
                  onChange={event => {
                     setNewBoardName(event.target.value);
                  }}
               />
               <Button onClick={createNewBoard}>Create new board</Button>
            </div>
         </div>
      </div>
   );
}
