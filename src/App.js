import SignUp from "./components/auth/SignUp"
import { Container } from 'react-bootstrap'
import { AuthProvider } from './contexts/AuthContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import LogIn from './components/auth/LogIn'
import PrivateRoute from './components/auth/PrivateRoute'
import ForgotPassword from './components/auth/ForgotPassword'
import UpdateProfile from './components/auth/UpdateProfile'
import Read from './components/crud/Read'

function App() {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <div className="w-100" style={{ maxWidth: "400px"}}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path='/' component={Dashboard} />
              <PrivateRoute path='/update-profile' component={UpdateProfile} />
              <Route path="/signup" component={SignUp} />
              <Route path="/login" component={LogIn} />
              <Route path='/forgot-password' component={ForgotPassword} />
              <Route path='/read' component={Read} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
