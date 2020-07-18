import React, { Component } from 'react';
import '../global.css';
import './index.css';

export default class Home extends Component {
    render() {
        return (
            <div class="content">
                <h1 class="title">Activty Boards</h1>
                <p class="description">Descrição</p>
                <form>
                    <div class="login">
                        <label>Username</label>
                        <input type="text"/>
                        <label>Password</label>
                        <input type="password"/>
                        <button class="primary-btn">Log in</button>
                    </div>
                </form>
        </div>
        )
    }
}