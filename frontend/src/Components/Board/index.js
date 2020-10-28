import React, { useEffect, useState } from 'react';

import Day from '../Day';
import './index.css';
import deleteIcon from '../../assets/x-square.svg';

import api from '../../services/api';

export default function Board(props) {
   const [days, setDays] = useState([]);

   const token = localStorage.getItem("token");
   const config = {
      headers: { Authorization: `Bearer ${token}` },
   };

   useEffect(() => {
      api.get(`/boards/${props.postid}`, config).then(response => {
         // extração das informações da data recebida
         const createdAt = response.data.board.createdAt;
         const daysDone = [];
         for (let index = 0; index < response.data.board.daysDone.length; index++) {
            daysDone.push(response.data.board.daysDone[index]);
         }
         const parts = createdAt.split('-');
         const year = parts[0];
         const month = parts[1];
         const day = parts[2].slice(0, 2);

         // Criação da respectiva data como Date();
         const creationDate = new Date(parseInt(year), parseInt(month)-1, parseInt(day));
         const daysToSunday = creationDate.getDay();
         const firstDay = new Date(creationDate.getFullYear(), creationDate.getMonth(), creationDate.getDate() - daysToSunday);
         console.log(firstDay);

         const daysArray = [];
         const week1 = [];
         const week2 = [];
         const week3 = [];
         const week4 = [];
         const weeks = [week1, week2, week3, week4]
         let index = 0;
         // Loop das semanas
         weeks.forEach(week => {
            // Loop de cada dia na semana
            for (let i = 0; i < 7; i++) {
               const date = new Date(firstDay.getFullYear(), firstDay.getMonth(), firstDay.getDate() + 1*index);
               const strDate = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
               if (daysDone.includes(strDate)) {
                  week.push(`${strDate}.rectangle-on`);
               } else {
                  week.push(`${strDate}.rectangle-off`);
               }
               index += 1;
            }
         });
         // Loop para organizar os dias no array
         for (let i = 0; i < 7; i++) {
            daysArray.push(week1[i]);
            daysArray.push(week2[i]);
            daysArray.push(week3[i]);
            daysArray.push(week4[i]);
         }

         // OBS: o código acima é burro, entretanto é a única forma que eu achei para resolver o problema.
         // Então, eu do futuro/pessoa aleatória no meu github, não se preocupe em entender esse código
         // simplesmente faça melhor.
         setDays(daysArray);
      });
      // eslint-disable-next-line
   }, []);

   function deleteBoard(event) {
      const boardId = props.postid;

      api.delete(`/boards/${boardId}`, config);
   }

   async function handleDayCompleted(event) {
      const boardId = props.postid;
      let daysDoneArray = []
      api.get(`/boards/${boardId}`, config).then(response => {
         daysDoneArray = response.data.board.daysDone;
         const now = new Date();
         const dateToSend = `${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()}`;
         if (!daysDoneArray.includes(dateToSend)) {
            daysDoneArray.push(dateToSend);
            api.put(`/boards/${boardId}`, {
               daysDone: daysDoneArray
            }, config);
            window.location.reload(false);
         }
      });
   }
   return (
      <main className='board'>
         <header>
            <label>{props.label}</label>
            <button onClick={deleteBoard} className="delete">
               <img className="delete-icon" src={deleteIcon} alt="delete"/>
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
               <div className="days">
                  {days.map(day => {
                     const parts = day.split('.');

                     return <Day type={parts[1]} key={day} date={parts[0]}/>
                  })}
               </div>
            </div>
         </div>
         <button className="done" onClick={handleDayCompleted}>Done</button>
      </main>
   );
}
