import './App.css';
import React from 'react';
import Home from './components/Home';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import MovieDetail from './components/MovieDetail';
import Header from './components/Header';
import Footer from './components/Footer';
import Search from './components/Search';

function App() {

  return (
    <BrowserRouter>
    <Header />
    <div>
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route path='/movies/:id' component={MovieDetail}></Route>
      <Route path='/search' component={Search}></Route>
    </Switch>
    </div>
    <Footer />
    </BrowserRouter>
  
  );
}

export default App;