import React from 'react';
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';

import { UserProvider } from './UserContext';
import Home from './home/Home';
import Register from './Register';

function App() {
    return (
        <UserProvider>
        <Router>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Navigate to="/register" />} />
          </Routes>
        </Router>
      </UserProvider>
    );
}

export default App;
