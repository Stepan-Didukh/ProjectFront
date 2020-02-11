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
import MainPage from "./Container/MainPage/MainPage";
import RegisterAdminPage from "./Container/RegisterAdminPage/RegisterAdminPage";
import AdminPage from "./Container/AdminPage/AdminPage";
import LoginAdminPage from "./Container/LoginAdminPage/LoginAdminPage";
import UserList from "./Components/UserList/UserList";
import RoomList from "./Components/RoomList/RoomList";


function App() {

    return (
        <Router>

            <Switch>
                <Route exact path="/" component={HomePage}/>

                <Route  path="/login" component={LoginPage}/>

                <Route  path="/loginAdmin" component={LoginAdminPage}/>

                <Route  path="/register"><RegisterPage/></Route>

                <Route  path="/userList" component={UserList}/>

                <Route  path="/roomList" component={RoomList}/>

                <Route  path="/User" component={MainPage}/>

                <Route  path="/admin" component={AdminPage}/>

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

