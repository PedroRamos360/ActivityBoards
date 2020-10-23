import React, { useEffect, useState } from 'react';

import Week from '../Week';
import './index.css';
import deleteIcon from '../../assets/x-square.svg';

import api from '../../services/api';

export default function Board(props) {
   const [weeks, setWeeks] = useState(['1', '2', '3', '4']);

   const token = localStorage.getItem("token");
   const config = {
      headers: { Authorization: `Bearer ${token}` },
   };

   useEffect(() => {
      api.get('/boards', config).then(response => {
         const boards = response.data.userBoards;
         boards.forEach(board => {
            api.get(`/boards/${board._id}`, config).then(response => {
               // extração das informações da data recebida
               const createdAt = response.data.board.createdAt;
               const parts = createdAt.split('-');
               const year = parts[0];
               const month = parts[1];
               const day = parts[2].slice(0, 2);

               // Criação da respectiva data como Date();
               const creationDate = new Date(parseInt(year), parseInt(month)-1, parseInt(day));
               const daysToSunday = creationDate.getDay();
               const firstDay = new Date(creationDate.getFullYear(), creationDate.getMonth(), creationDate.getDate() - daysToSunday);

               setWeeks([]);
               const nweeks = [];
               for (let i = 0; i < 4; i++) {
                  const date = new Date(firstDay.getFullYear(), firstDay.getMonth(), firstDay.getDate() + 7*i);
                  nweeks.push(`${i}/${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`);
               }
               setWeeks(nweeks);
            });
         });
      });
   }, []);

  function deleteBoard(event) {
      const boardId = event.target.getAttribute("postid");

      api.delete(`/boards/${boardId}`, config);
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
                  {weeks.map(week => {
                     return <Week key={week.slice(0, 1)} date={week}/>
                  })}
               </div>
            </div>
         </div>
         <button className="submit">Done</button>
      </main>
   );
}
