import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from '../src/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from '../src/pages/Services';
import Products from '../src/pages/Product';
import SignUp from '../src/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;