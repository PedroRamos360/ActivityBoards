import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Input from '../../Components/Input';
import Button from '../../Components/Button';
import '../../global.css';
import './index.css';
import api from '../../services/api';

export default function Home() {
   const history = useHistory();

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
         const config = {
            headers: { Authorization: `Bearer ${token}` },
         };
         api.get('boards', config).then(() => {
            history.push(`/UserPage`);
         }, () => {});
      }
      // eslint-disable-next-line
   }, []);

   function handleLogin(event) {
      event.preventDefault();

      api.post('/auth/authenticate', {
         email,
         password
      }).then(response => {
         const token = response.data.token;
         const firstname = response.data.user.firstname;
         localStorage.setItem('firstname', firstname);
         localStorage.setItem("token", token);
         history.push(`/UserPage`);
      }, error => {
         if (String(error).indexOf("Network Error") === 7) {
            alert("Network Error");
         } else {
            alert("Email and/or password wrong");
         }
      });
   }
   return (
      <div id="home-page">
         <div className="modal">
               <img className="background-image" src="https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" alt="background"></img>
         </div>
         <h1 className="title">Activity Boards</h1>
         <form>
               <div className="login">
                  <div className="input-information">
                     <label>E-mail</label>
                     <Input
                        type="text"
                        value={email}
                        onChange={event => {
                           setEmail(event.target.value);
                        }}
                     />
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
                  <Button onClick={handleLogin}>Log in</Button>
                  <p>Don't have an account? <Link to="/Logon">Sign up</Link></p>
               </div>
         </form>
      </div>
   )
}
