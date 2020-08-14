import React from 'react';

import './index.css';
import Rectangle from '../Rectangle';

export default function Week() {
   return (
      <div className='week'>
         <Rectangle type='rectangle-off'/>
         <Rectangle type='rectangle-off'/>
         <Rectangle type='rectangle-off'/>
         <Rectangle type='rectangle-off'/>
         <Rectangle type='rectangle-off'/>
         <Rectangle type='rectangle-off'/>
         <Rectangle type='rectangle-off'/>
      </div>
   );
}
