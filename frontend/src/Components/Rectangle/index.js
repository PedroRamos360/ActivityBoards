import React, { Component } from 'react';

import './index.css'

export default class Rectangle extends Component {
   render() {
      return (
         <div className={this.props.type} />
      );
   }
}
