import React, { Component } from 'react';
import Input from '../../Components/Input';
import '../../global.css';
import './index.css';

export default class Home extends Component {
    render() {
        return (
            <div class="content">
                <div class="modal">
                    <img class="background-image" src="https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" alt="background"></img>
                </div>
                <h1 class="title">Activity Boards</h1>
                <form>
                    <div class="login">
                        <div class="input-information">
                            <label>Username</label>
                            <Input type="text"/>
                        </div>
                        <div class="input-information">
                            <label>Password</label>
                            <Input type="password"/>
                        </div>
                        <button class="primary-btn">Log in</button>
                        <p>Don't have an account? <a href="/Cadastro">Sign up</a></p>
                    </div>
                </form>
        </div>
        )
    }
}