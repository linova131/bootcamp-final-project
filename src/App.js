import './App.css';
import Home from './components/Home';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import MovieDetail from './components/MovieDetail';

function App() {
  return (
    <BrowserRouter>
    <div>
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route path='/movies/:id' component={MovieDetail}></Route>
    </Switch>
    </div>
    </BrowserRouter>
  
  );
}

export default App;
