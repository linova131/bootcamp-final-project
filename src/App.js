import './App.css';
import React, {useContext, useEffect} from 'react';
import Home from './components/Home';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import MovieDetail from './components/MovieDetail';
import Header from './components/Header';
import Footer from './components/Footer';
import MovieContainer from './components/MovieContainer';
import Context from './Context';


function App() {
  const {searchResults} = useContext(Context);

  return (
    <BrowserRouter>
    <Header />
    <div>
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route path='/movies/:id' component={MovieDetail}></Route>
      <Route path='/search' render={() => <MovieContainer data={searchResults}/>}></Route>
    </Switch>
    </div>
    <Footer />
    </BrowserRouter>
  
  );
}

export default App;