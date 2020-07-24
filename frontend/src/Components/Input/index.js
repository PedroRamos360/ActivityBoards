import React, { Component } from 'react';
import './index.css';

export default class Input extends Component {
    render() {
        return (
            <input type={this.props.type}/>
        );
    };
};