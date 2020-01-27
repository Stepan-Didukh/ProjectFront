import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import HomePage from "./Container/HomePage/HomePage";
import NotFoundPage from "./Container/NotFoundPage/NotFoundPage";
import LoginPage from "./Container/LoginPage/LoginPage";
import RegisterPage from "./Container/RegisterPage/RegisterPage";



function App() {

  return (
      <Router>

          <Switch>
            <Route exact path="/">
              <HomePage/>
            </Route>

              <Route exact path="/login">
                  <LoginPage/>
              </Route>

              <Route exact path="/register">
                  <RegisterPage/>
              </Route>


              <Route
                  path="/not-found"
                  render={routeProps => (
                      <NotFoundPage {...routeProps}/>
                  )}
              />
            <Redirect
                from="*"
                to={{
                  pathname: '/not-found'
                }}
            />
          </Switch>
      </Router>
  )
}

export default App;
