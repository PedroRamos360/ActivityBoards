import React, { useEffect, useState } from 'react';
import './index.css';

import backgroundImage from '../../assets/user-page.jpg';
import Board from '../../Components/Board';
import api from '../../services/api';

export default function UserPage() {
   const [boards, setBoards] = useState([]);
   const [firstname, setFirstname] = useState('');

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
            setFirstname(response.data.userBoards[0].user.firstname);
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
            <h1 className='title'>{`${firstname}'s boards`}</h1>
            <button>+ New Board</button>
         </header>
         <div className="boards">
            {boards.map(board => {
               return <Board key={board._id} label={board.title}/>
            })}
         </div>
      </div>
   );
}
