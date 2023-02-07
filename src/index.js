import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import theme from './helpers/theme';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
