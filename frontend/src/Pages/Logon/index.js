import React from 'react';
import { useHistory } from 'react-router-dom';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import '../../global.css';
import './index.css';

export default function Logon() {
   const history = useHistory();
   return (
      <div id="logon-page">
         <div className="modal">
               <img className="background-image" src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" alt="background"></img>
         </div>
         <h1 className="title">Register</h1>
         <form>
            <div className="login">
               <div className="input-information">
                     <label>E-mail</label>
                     <Input type="email"/>
               </div>
               <div className="input-name">
                     <div className="input-information" id="first">
                        <label>First name</label>
                        <Input className="name-input" type="text"/>
                     </div>
                     <div className="input-information" id="last">
                        <label>Last name</label>
                        <Input className="name-input" type="text"/>
                     </div>
               </div>
               <div className="input-information">
                     <label>Username</label>
                     <Input type="text"/>
               </div>
               <div className="input-information">
                     <label>Password</label>
                     <Input type="password"/>
               </div>
               <Button onClick={() => {history.push('/')}} className="primary-btn">Register</Button>
            </div>
         </form>
      </div>
   )
}
