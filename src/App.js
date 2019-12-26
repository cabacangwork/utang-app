import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Home from './components/Home';
import AddUtang from './components/AddUtang';
import UtangList from './components/UtangList';
import Complete from './components/Complete';
import 'reset-css';
import '../public/styles/styles.scss';
import 'animate.css';


function App() {
  return (
    <Router>
      <div className="container-wrapper">
        <nav>
          <ul>
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/add">Add</NavLink></li>
            <li><NavLink to="/list">List</NavLink></li>
            <li><NavLink to="/complete">Complete</NavLink></li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route path="/add"><AddUtang/></Route>
          <Route path="/list"><UtangList/></Route>
          <Route path="/complete"><Complete/></Route>
        </Switch>
      </div>
    </Router>
  )
}
  
export default App;