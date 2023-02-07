import './App.css';

import { Route, Routes } from 'react-router-dom';
import routes from './helpers/routes';

const App = () => {
  return (
    <Routes>
      {routes.map((route, key) => (
        <Route path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default App;
