import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Pages/Home/index';
import Register from './Pages/Register/index';
import UserPage from './Pages/UserPage/index';
import './global.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path='/' component={Home}/>
        <Route path='/register' component={Register}/>
        <Route path='/userpage' component={UserPage}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
