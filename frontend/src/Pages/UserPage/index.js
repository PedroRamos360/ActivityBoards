import React from 'react';
import './index.css';

import backgroundImage from '../../assets/user-page.jpg';
import Week from '../../Components/Week';

export default function UserPage() {
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
            <div className='board-content'>
               <label>Matemática</label>
               <div className='board'>
                  <Week />
                  <Week />
                  <Week />
                  <Week />
                  <Week />
                  <Week />
                  <Week />
                  <Week />
                  <Week />
                  <Week />
                  <Week />
                  <Week />
                  <Week />
                  <Week />
                  <Week />
                  <Week />
                  <Week />
                  <Week />
                  <Week />
                  <Week />
                  <Week />
                  <Week />
               </div>
            </div>
        </div>
    );
}
