import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Doctors from './pages/Doctors';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Service from './pages/Service';
import Services from './pages/Services';
import PrivateRoute from './components/PrivateRoute';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { createContext } from 'react';
import { useAtom } from 'jotai';
import { userInfoAtom } from './store';

export const userContext = createContext();

const App = () => {
  const [user, setUser] = useAtom(userInfoAtom);
  return (
    <Router>
      <userContext.Provider value={{ user, setUser }}>
        <div className='bg-blue-800 h-screen overflow-auto'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/services' component={Services} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <PrivateRoute path='/doctors'>
              <Doctors />
            </PrivateRoute>
            <PrivateRoute path='/about'>
              <About />
            </PrivateRoute>
            <PrivateRoute path='/service/:id'>
              <Service />
            </PrivateRoute>
            <Route path='*' component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </userContext.Provider>
    </Router>
  );
};

export default App;
