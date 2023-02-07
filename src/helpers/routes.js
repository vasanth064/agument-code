import JavascriptToPython from '../components/JavascriptToPython';
import Dashboard from './../components/Dashboard';
import Home from './../components/Home';
import settingsIcon from './../assets/settings.svg';
import Settings from '../components/Settings';

const routes = [
  {
    path: '/settings',
    title: 'Settings',
    nav: false,
    private: true,
    element: (
      <Dashboard>
        <Settings />
      </Dashboard>
    ),
  },
  {
    path: '/',
    title: 'Dashboard',
    color: '#E16565',
    icon: settingsIcon,
    nav: true,
    private: true,
    element: (
      <Dashboard>
        <Home />
      </Dashboard>
    ),
  },
  {
    path: '/javascriptToPython',
    title: 'javascript To Python',
    color: '#E16565',
    icon: settingsIcon,
    nav: true,
    private: true,
    element: (
      <Dashboard>
        <JavascriptToPython />
      </Dashboard>
    ),
  },
];

export default routes;
