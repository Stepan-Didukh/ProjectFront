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
import UserPage from "./Container/UserPage/UserPage";


function App() {

    return (
        <Router>

            <Switch>
                <Route exact path="/" component={HomePage}/>

                <Route exact path="/login" component={LoginPage}/>

                <Route exact path="/loginAdmin" component={LoginPage}/>

                <Route exact path="/register" component={RegisterPage}/>

                <Route exact path="/User" component={UserPage}/>
                {/*add user name in router*/}

                <Route exact path="/registerAdmin" component={RegisterPage}/>

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
