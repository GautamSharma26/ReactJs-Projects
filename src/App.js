import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './component/login';
import "./index.css"
import "../src/component/Home/Home.jsx"
import Home from '../src/component/Home/Home.jsx';
import SocketComponent from './SocketCode/Socket/socketConnection.jsx';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Routes>
      {/* Public Route */}
      <Route
        path="/login"
        element={<Login setIsAuthenticated={setIsAuthenticated} />}
      />

      {/* Private Route */}
      <Route
        path="/"
        element={
          isAuthenticated ? <Home /> : <Navigate to="/login" replace />   
        }
      />
      <Route path='/socket' element={<SocketComponent/>}/>
    </Routes>
  );
}


export default App;
