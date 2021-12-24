import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from './LoginForm';
import ListBoards from './ListBoards';

function App() {
  return (
    <Router>
    <div className="content">
      <Switch>
        <Route exact path="/">
          <LoginForm />
        </Route>
        <Route path="/ListBoards">
          <ListBoards />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
