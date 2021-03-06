import React from "react";
import Registration from "./registration";

import { HashRouter, Route } from "react-router-dom";
import Login from "./login";
import Mainpage from "./main-page";
import ResetPassword from "./resetpassword";
import RegistrationDoctor from "./reg-doctor";
import LoginDoctor from "./log-doctor";
import Logo from "./logo";

export default function Welcome() {
    return (
        <div id="welcome">
            <Logo />
            <h1> Welcome to my website</h1>

            <HashRouter>
                <div>
                    <Route exact path="/" component={Mainpage} />
                    <Route exact path="/reg" component={RegistrationDoctor} />
                    <Route exact path="/log" component={LoginDoctor} />
                    <Route
                        exact
                        path="/registartion"
                        component={Registration}
                    />
                    <Route path="/login" component={Login} />
                    <Route path="/resetpassword" component={ResetPassword} />
                </div>
            </HashRouter>
        </div>
    );
}
