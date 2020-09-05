import React, { Component } from 'react';
import './index.css';

export default class Input extends Component {
    render() {
        return (
            <input className={this.props.className} type={this.props.type}/>
        );
    };
};
