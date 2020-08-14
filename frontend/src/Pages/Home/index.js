import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import '../../global.css';
import './index.css';

export default function Home() {
    const history = useHistory();
    return (
        <div id="home-page">
            <div className="modal">
                <img className="background-image" src="https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" alt="background"></img>
            </div>
            <h1 className="title">Activity Boards</h1>
            <form>
                <div className="login">
                    <div className="input-information">
                        <label>Username</label>
                        <Input type="text"/>
                    </div>
                    <div className="input-information">
                        <label>Password</label>
                        <Input type="password"/>
                    </div>
                    <Button onClick={() => {history.push('/UserPage')}}>Log in</Button>
                    <p>Don't have an account? <Link to="/Logon">Sign up</Link></p>
                </div>
            </form>
        </div>
    )
}
