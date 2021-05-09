import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

// import ProtectedRoute from './ProtectedRoute'

// Pages
import Login from './pages/Login/'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/" exact>
          <Dashboard />
        </Route>
      </Switch>
      {/* <ProtectedRoute path="/home" component={ Home } isAuth={ false } />
      <ProtectedRoute path="/details" component={ Details } isAuth={ false } /> */}

    </Router>
  );
}

export default App