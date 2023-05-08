import React from 'react';
import './App.css';
//import { Switch, Route } from "react-router-dom";
import { Routes ,Route } from 'react-router-dom';



// NU UITATI sa importati paginile
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Page404 from './pages/Page404';
import Category from './pages/Category';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return(
      <div>

        <Routes>
        <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/category/:categoryName' element={<Category/>} />
          <Route path='*' element={<Page404/>}/>
        </Routes>
      </div>
    );
  }
}

export default App;
