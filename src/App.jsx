import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <div className='bg-blue-800 h-screen z-0 overflow-auto'>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='*' component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

function NotFound() {
  return (
    <div className='text-center min-h-[60vh]'>
      <h1 className='mt-16 text-5xl text-red-400 font-bold'>Page Not Found</h1>
    </div>
  );
}

export default App;
