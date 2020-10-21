import React from 'react';

import Week from '../Week';
import './index.css';
import deleteIcon from '../../assets/x-square.svg';

import api from '../../services/api';

export default function Board(props) {
   const token = localStorage.getItem("token");

   const config = {
      headers: { Authorization: `Bearer ${token}` },
   };

  function deleteBoard(event) {
      const boardId = event.target.getAttribute("postid");

      api.get('/boards', config).then(response => {
         api.delete(`/boards/${boardId}`, config);
      });
   }
   return (
      <main className='board'>
         <header>
            <label>{props.label}</label>
            <button onClick={deleteBoard} className="delete">
               <img className="delete-icon" src={deleteIcon} alt="delete" postid={props.postid}/>
            </button>
         </header>
         <div className='board-content'>
            <div className="day-labels">
               <label>Sunday</label>
               <label>Monday</label>
               <label>Tuesday</label>
               <label>Wednesday</label>
               <label>Thursday</label>
               <label>Friday</label>
               <label>Saturday</label>
            </div>
            <div className="board-weeks">
               <div className="week-labels">
                  <label>Week 1</label>
                  <label>Week 2</label>
                  <label>Week 3</label>
                  <label>Week 4</label>
               </div>
               <div className="weeks-content">
                  <Week />
                  <Week />
                  <Week />
                  <Week />
               </div>
            </div>
         </div>
         <button className="submit">Done</button>
      </main>
   );
}
