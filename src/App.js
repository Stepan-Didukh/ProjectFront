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
import RegisterAdminPage from "./Container/RegisterAdminPage/RegisterAdminPage";
import LoginAdminPage from "./Container/LoginAdminPage/LoginAdminPage";
import UserInfo from "./Container/UserInfo/UserInfo";
import Support from "./Container/Support/Support";
import AddRoom from "./Container/AdminPage/AddRoom";

function App() {

    return (
        <Router>

            <Switch>
                <Route exact path="/" component={HomePage}/>

                <Route  path="/login" component={LoginPage}/>

                <Route  path="/loginAdmin" component={LoginAdminPage}/>

                <Route  path="/register"><RegisterPage/></Route>

                <Route  path="/Users" component={UserInfo}/>

                <Route  path="/User" component={HomePage}/>

                <Route  path="/Support" component={Support}/>

                <Route  path="/Admin" component={HomePage}/>

                <Route  path="/AddRoom" component={AddRoom}/>

                <Route path="/registerAdmin" component={RegisterAdminPage}/>

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

