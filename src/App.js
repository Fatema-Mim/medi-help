import './App.css';
import { BrowserRouter as Router, Switch ,Route} from 'react-router-dom';
import Home from './component/Home/Home';
import ServiceDetail from './component/ServiceDetail/ServiceDetail';
import Login from './component/Login/Login';
import Header from './component/Header/Header';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Registration from './component/Registration/Registration';
import Doctors from './component/Doctors/Doctors';
import Footer from './component/Footer/Footer';
import AboutUs from './component/AboutUs/AboutUs';
import NoFound from './component/NoFound/NoFound';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/service/:serviceId">
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/registration">
              <Registration></Registration>
            </Route>
            <PrivateRoute path="/doctors">
              <Doctors></Doctors>
            </PrivateRoute>
            
            <PrivateRoute path="/about">
              <AboutUs></AboutUs>
            </PrivateRoute>
            <Route path="*">
                <NoFound></NoFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
