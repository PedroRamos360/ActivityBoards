import React, { useState } from 'react';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import '../../global.css';
import './index.css';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

export default function Logon() {
   const history = useHistory();

   const [email, setEmail] = useState('');
   const [firstname, setFirstname] = useState('');
   const [lastname, setLastname] = useState('');
   const [password, setPassword] = useState('');

   async function handleRegister(event) {
      event.preventDefault();

      try {
         await api.post('auth/register', {
            email,
            firstname,
            lastname,
            password
         });

         alert('User registered with sucess');
         history.push('/');
      } catch (error) {
         if (!String(error).indexOf("Network Error") === 7) {
            if (error.response.data.error == "User already exists") {
               alert("User already exists");
               return;
            }
         } else {
            alert("Network error");
            return;
         }

         alert('Verify your data and try again');
      }
   }

   return (
      <div id="register-page">
         <div className="modal">
               <img className="background-img" src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" alt="background"></img>
         </div>
         <h1 className="title">Register</h1>
         <form>
            <div className="login">
               <div className="input-information">
                     <label>E-mail</label>
                     <Input
                        type="email"
                        value={email}
                        onChange={event => {
                           setEmail(event.target.value);
                        }}
                     />
               </div>
               <div className="input-name">
                     <div className="input-information" id="first">
                        <label>First name</label>
                        <Input
                           className="name-input"
                           type="text"
                           value={firstname}
                           onChange={event => {
                              setFirstname(event.target.value);
                           }}
                        />
                     </div>
                     <div className="input-information" id="last">
                        <label>Last name</label>
                        <Input
                           className="name-input"
                           type="text"
                           value={lastname}
                           onChange={event => {
                              setLastname(event.target.value);
                           }}
                        />
                     </div>
               </div>
               <div className="input-information">
                     <label>Password</label>
                     <Input
                        type="password"
                        value={password}
                        onChange={event => {
                           setPassword(event.target.value);
                        }}
                     />
               </div>
               <Button onClick={handleRegister}>Register</Button>
            </div>
         </form>
      </div>
   )
}
