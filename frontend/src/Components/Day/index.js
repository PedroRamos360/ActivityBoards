import React from 'react';

import './index.css'

export default function Day(props) {
   return (
      <div className={props.type} date={props.date} />
   );
}
