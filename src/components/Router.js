import Header from './Header';
import Footer from './Footer';
import Introduction from './Introduction';
import Home from './Home';
import React from 'react';
import Contact from './Contact';
import ReactDOM from 'react-dom';
import Search from './Search';
import Wrapper from './Wrapper';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const BackImg = [];
export default () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/intro' exact component={Introduction} />
        <Route path='/search' exact component={Search} />
        <Route path='/contact' exact component={Contact} />
      </Switch>
      <Footer />
    </div>
  </Router>
);
