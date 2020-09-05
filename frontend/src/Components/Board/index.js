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
               <Week />
               <Week />
               <Week />
               <Week />
            </div>
         </main>
      );
   }
}
