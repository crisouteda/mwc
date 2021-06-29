import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Main,Login, Register} from "./views"

function App() {
  return (
    <Router>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
        </Switch>
</Router>
  );
}

export default App;
