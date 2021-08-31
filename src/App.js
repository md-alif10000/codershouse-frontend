
import './App.css';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import Nav from './components/shared/Nav/Nav';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />

        </Switch>
      </Router>
 
    </div>
  );
}

export default App;
