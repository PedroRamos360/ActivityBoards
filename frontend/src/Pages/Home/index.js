import React, { Component } from 'react';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import '../../global.css';
import './index.css';

export default class Home extends Component {
    render() {
        return (
            <div class="Home-content">
                <div class="Home-modal">
                    <img class="Home-background-image" src="https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" alt="background"></img>
                </div>
                <h1 class="Home-title">Activity Boards</h1>
                <form>
                    <div class="Home-login">
                        <div class="Home-input-information">
                            <label>Username</label>
                            <Input type="text"/>
                        </div>
                        <div class="Home-input-information">
                            <label>Password</label>
                            <Input type="password"/>
                        </div>
                        <Button>Log in</Button>
                        <p>Don't have an account? <a href="/Logon">Sign up</a></p>
                    </div>
                </form>
            </div>
        )
    }
}