import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import theme from './helpers/theme';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import FirebaseAuthenticationProvider from './context/firebaseAuthContext';
import JWTAuthenticationProvider from './context/JWTAuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <JWTAuthenticationProvider>
        <App />
      </JWTAuthenticationProvider>
    </BrowserRouter>
  </ThemeProvider>
);
