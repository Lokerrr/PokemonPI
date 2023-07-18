import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./views/Landing/LandingPage";
import Home from "./views/Home/Home"
import Form from "./views/Create/Create"
import Detail from "./views/Detail/Detail"
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
          <Route exact path = '/' component = {LandingPage}/>
          <Route path='/'>
            <NavBar/>
            <Switch>
            <Route path = '/home' component = {Home}/>
            <Route path = "/detail" component = {Detail}/>
            <Route path = "/create" component = {Form}/>
            </Switch>
          </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
