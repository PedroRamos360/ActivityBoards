import React, { Component } from 'react';
import '../global.css';

export default class Home extends Component {
    render() {
        return (
            <div class="content">
                <h1 class="title">Activty Boards</h1>
                <form>
                    <label>Username</label>
                    <input type="text"/>
                    <label>Password</label>
                    <input type="password"/>
                </form>
            </div>
        )
    }
}