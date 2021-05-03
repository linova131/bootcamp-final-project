import './App.css';
import Home from './components/Home';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div>
    <Switch>
      <Route exact path='/' component={Home}></Route>
    </Switch>
    </div>
    </BrowserRouter>
  
  );
}

export default App;
