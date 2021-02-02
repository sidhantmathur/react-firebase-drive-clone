import SignUp from "./components/auth/SignUp"
import { AuthProvider } from './contexts/AuthContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Profile from './components/Profile'
import LogIn from './components/auth/LogIn'
import PrivateRoute from './components/auth/PrivateRoute'
import ForgotPassword from './components/auth/ForgotPassword'
import UpdateProfile from './components/auth/UpdateProfile'
import Read from './components/crud/Read'

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path='/' component={Profile} />
          <PrivateRoute path='/update-profile' component={UpdateProfile} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={LogIn} />
          <Route path='/forgot-password' component={ForgotPassword} />
          <Route path='/read' component={Read} />
        </Switch>
      </AuthProvider>
  </Router>
  );
}

export default App;
