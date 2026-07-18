import { Link, Route, Routes } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import AuthButtons from './Auth/AuthButtons';
import BestBooks from './components/BestBooks';
import Welcome from './components/Welcome';
import Profile from './components/Profile';
import About from './About';
import './App.css'

function App() {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();  // check whether user is logged in or not

  return (
    <>
      <header>
        <h1>Can of Books</h1>
        <nav>
          <Link to="/">Home</Link>
          {isAuthenticated && <Link to="/profile">Profile</Link>}
          <Link to="/about">About</Link>
          <AuthButtons />
        </nav>
      </header>

      <Routes>
        <Route 
          path='/' 
          element={isAuthenticated 
          ? <BestBooks getAccessTokenSilently={getAccessTokenSilently} /> 
          : <Welcome />} 
        />

        <Route
          path='/profile'
          element={isAuthenticated 
            ? <Profile /> 
            : <Welcome />}
        />
        
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  );
}

export default App
