import React, { Component } from 'react';

import './index.css';
import Rectangle from '../Rectangle';

export default class Week extends Component {
   render() {
      return (
         <div className='week' id={this.props.id}>
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
}
