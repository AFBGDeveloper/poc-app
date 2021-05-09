import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import ProvideAuth from './ProvideAuth'
import PrivateRoute from './PrivateRoute'

// Pages
import Login from './pages/Login/'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/" exact>
            <Dashboard />
          </PrivateRoute>
        </Switch>
      </Router>
    </ProvideAuth>
  );
}

export default App