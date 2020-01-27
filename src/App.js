import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import HomePage from "./Container/HomePage/HomePage";
import NotFoundPage from "./Container/NotFoundPage/NotFoundPage";



function App() {

  return (
      <Router>

          <Switch>
            <Route exact path="/">
              <HomePage/>
            </Route>

              <Route exact path="/not-found">
                  <NotFoundPage/>
              </Route>




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
