import React, { Component } from 'react';

import Week from '../Week';
import './index.css';

export default class Board extends Component {
   render () {
      return (
         <main className='board'>
            <header>
               <label>{this.props.label}</label>
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
            <button>Done</button>
         </main>
      );
   }
}
