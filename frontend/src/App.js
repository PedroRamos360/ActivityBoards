import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Pages/Home/index';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path='/' component={Home}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
