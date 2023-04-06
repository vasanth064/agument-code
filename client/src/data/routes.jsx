import ConvertIcon from './../assets/icons/convert.svg';
import DashboardIcon from './../assets/icons/dashboard.svg';
import ExplainIcon from './../assets/icons/explain.svg';
import SqlIcon from './../assets/icons/sql.svg';
import BugIcon from './../assets/icons/bug.svg';

import LanguageConversion from '../pages/LanguageConversion';
import Dashboard from '../components/Dashboard';
import DashboardHome from '../pages/DashboardHome';
import Profile from '../pages/Profile';
import CodeExplanation from '../pages/CodeExplanation';
import Signin from '../pages/Signin';
import Home from '../pages/Home';
import Signup from '../pages/Signup';
import ForgetPassword from '../pages/ForgetPassword';
import ResetToken from '../pages/ResetToken';
import SqlGenerator from '../pages/SqlGenerator';
import BugFixer from '../pages/BugFixer';

const routes = [
  {
    path: '/',
    title: 'Agument Code',
    private: false,
    element: <Home />,
  },
  {
    path: '/signin',
    title: 'Sign In',
    private: false,
    element: <Signin />,
  },
  {
    path: '/signup',
    title: 'Sign Up',
    private: false,
    element: <Signup />,
  },
  {
    path: '/forgetPassword',
    title: 'Forget Password',
    private: false,
    element: <ForgetPassword />,
  },
  {
    path: '/resetToken',
    title: 'Reset Token',
    private: false,
    element: <ResetToken />,
  },
  {
    path: '/dashboard',
    title: 'Dashboard',
    color: '#E16565',
    icon: DashboardIcon,
    nav: true,
    private: true,
    element: (
      <Dashboard>
        <DashboardHome />
      </Dashboard>
    ),
  },
  {
    path: '/languageConversion',
    title: 'Language Convertor',
    color: '#70B9EE',
    icon: ConvertIcon,
    nav: true,
    private: true,
    element: (
      <Dashboard>
        <LanguageConversion />
      </Dashboard>
    ),
  },
  {
    path: '/explainCode',
    title: 'Code Explainer',
    color: '#69B608',
    icon: ExplainIcon,
    nav: true,
    private: true,
    element: (
      <Dashboard>
        <CodeExplanation />
      </Dashboard>
    ),
  },
  {
    path: '/SqlGenerator',
    title: 'SQL Generator',
    color: '#FF75F9',
    icon: SqlIcon,
    nav: true,
    private: true,
    element: (
      <Dashboard>
        <SqlGenerator />
      </Dashboard>
    ),
  },
  {
    path: '/bugFixer',
    title: 'Bug Fixer',
    color: '#B13737',
    icon: BugIcon,
    nav: true,
    private: true,
    element: (
      <Dashboard>
        <BugFixer />
      </Dashboard>
    ),
  },
  {
    path: '/profile',
    title: 'Profile',
    nav: false,
    private: true,
    element: (
      <Dashboard>
        <Profile />
      </Dashboard>
    ),
  },
];

export default routes;
