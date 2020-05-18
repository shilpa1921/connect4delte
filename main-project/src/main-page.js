import React from "react";
import Registration from "./registration";

import { HashRouter, Route, Link } from "react-router-dom";
import Login from "./login";
import ResetPassword from "./resetpassword";
import RegistrationDoctor from "./reg-doctor";

export default function Welcome() {
    return (
        <div id="welcome11">
            <div id="doc">
                <h1>If you are quilified doctor Please sign up</h1>
                <HashRouter>
                    <div>
                        <Link to="/reg">You can register in here!</Link>
                    </div>
                    <div>
                        <p>
                            If you are already member
                            <Link to="/log">Log in here!</Link>
                        </p>
                    </div>
                </HashRouter>
            </div>
            <div id="pat">
                <h1>If you are patient Please sign up</h1>
                <HashRouter>
                    <div>
                        <Link to="/registartion">
                            You can register in here!
                        </Link>
                    </div>
                    <div>
                        <p>
                            If you are already member
                            <Link to="/login">Login in here!</Link>
                        </p>
                    </div>
                </HashRouter>
            </div>
        </div>
    );
}
