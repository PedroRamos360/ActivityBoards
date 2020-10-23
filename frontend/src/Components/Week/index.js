import React from 'react';

import './index.css';
import Rectangle from '../Rectangle';

export default function Week(props) {
   const dayst = [];
   for (let i = 0; i < 7; i++) {
      dayst.push(i);
   }


   return (
      <div className='week' date={props.date}>
         {dayst.map((day) => {
            return (
               <Rectangle key={day} type='rectangle-off'/>
            )
         })}
      </div>
   );
}
