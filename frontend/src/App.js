import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Pages/Home/index';
import Logon from './Pages/Logon/index';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path='/' component={Home}/>
        <Route path='/Logon' component={Logon}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
