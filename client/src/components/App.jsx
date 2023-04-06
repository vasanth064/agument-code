import '../assets/App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import routes from '../data/routes';
// import FirebaseAuthenticationProvider from '../context/firebaseAuthContext';
import PrivateRoute from './PrivateRoute';
// import Dashboard from './Dashboard';

const App = () => {
  return (
    <Routes>
      {routes.map((route) =>
        route.private ? (
          <Route
            element={<PrivateRoute>{route.element}</PrivateRoute>}
            path={route.path}
            key={route.title}
          />
        ) : (
          <Route element={route.element} key={route.title} path={route.path} />
        )
      )}
    </Routes>
  );
};

export default App;
