import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./components/Landing/LandingPage";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
      <Route exact path = '/' component = {LandingPage}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
