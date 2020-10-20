import React, { useEffect, useState } from 'react';
import './index.css';

import Input from '../../Components/Input';
import Button from '../../Components/Button';
import Board from '../../Components/Board';
import backgroundImage from '../../assets/user-page.jpg';
import api from '../../services/api';

export default function UserPage() {
   const [boards, setBoards] = useState([]);

   useEffect(() => {
      const token = localStorage.getItem("token");
      const route = window.location.href;
      const userId = route.split('/')[4];

      const config = {
         headers: { Authorization: `Bearer ${token}` },
      };

      api.get(`/boards/${userId}`, config).then(response => {
         if (response.data.userBoards != null) {
            setBoards(response.data.userBoards);
         }
      });
   }, []);

   return (
      <div id='user-page'>
         <div className='modal'>
            <img
               className='background-image'
               src={backgroundImage}
               alt='background'
            />
         </div>
         <header className="page-header">
            <h1 className='title'>Your boards</h1>
            <button>+ New Board</button>
         </header>
         <div className="boards">
            {boards.map(board => {
               return <Board key={board._id} label={board.title}/>
            })}
         </div>
         <div className='newboard-modal'>
            <div className='newboard-input'>
               <label>Name</label>
               <Input type="text"/>
               <Button>Submit</Button>
            </div>
         </div>
      </div>
   );
}
