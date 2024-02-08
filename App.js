import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../src/components/Login';
import Search from './Search';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={loggedIn ? <Navigate to="/search" /> : <Login onLogin={handleLogin} />} />
        <Route path="/search" element={loggedIn ? <Search /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
