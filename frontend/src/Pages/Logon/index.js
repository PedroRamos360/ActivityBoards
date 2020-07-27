import React, { Component} from 'react';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import '../../global.css';
import './index.css';

export default class Logon extends Component {
    render() {
        return (
            <div class="Logon-content">
                <div class="Logon-modal">
                    <img class="Logon-background-image" src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" alt="background"></img>
                </div>
                <h1 class="Logon-title">Register</h1>
                <form>
                    <div class="Logon-login">
                        <div class="Logon-input-information">
                            <label>E-mail</label>
                            <Input type="email"/>
                        </div>
                        <div class="Logon-input-name">
                            <div class="Logon-input-information" id="first">
                                <label>First name</label>
                                <Input class="name-input" type="text"/>
                            </div>
                            <div class="Logon-input-information" id="last">
                                <label>Last name</label>
                                <Input class="name-input" type="text"/>
                            </div>
                        </div>
                        <div class="Logon-input-information">
                            <label>Username</label>
                            <Input type="text"/>
                        </div>
                        <div class="Logon-input-information">
                            <label>Password</label>
                            <Input type="password"/>
                        </div>
                        <Button class="primary-btn">Register</Button>
                    </div>
                </form>
            </div>
        )
    }
}