import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import AuthForm from './components/AuthForm';
import Home from './pages/Home';
import ProtectedRouting from './utils/ProtectedRouting';


function App() {
  return (
    <>
      {/* <AuthForm /> */}
      {/* <Home /> */}


      {/* <Link to='/login'>Login</Link> <br />
      <Link to='/signup'>Signup</Link> */}

      {/* <h1>Helo</h1> */}
      <Routes>

        {/* <Route
          path='/home'
          element={
            <ProtectedRouting>
              <Home />
            </ProtectedRouting>
          }
        /> */}

        <Route path='/'
          element={
            <ProtectedRouting>
              <Home />
            </ProtectedRouting>
          } />

        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthForm />} />
        {/* <Route path="/register" element={<AuthForm />} /> */}
      </Routes>
    </>
  );
}

export default App;
