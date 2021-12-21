import React from "react";
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";
import { AppProvider } from './context/AppProvider';
import Home from './components/home/Home'
import PlanView from './components/plan-view/PlanView'

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/trip", element: <PlanView /> },
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <AppProvider>
      <Router basename={process.env.PUBLIC_URL}>
        <App />
      </Router>
    </AppProvider>
  );
};

export default AppWrapper;
