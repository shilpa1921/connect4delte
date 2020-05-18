import React from "react";
import Logo from "./logo";
import Logout from "./logout";
import { HashRouter, Link } from "react-router-dom";

export default function Presentational({ first, last, imageUrl, toggleModal }) {
    imageUrl = imageUrl || "/default.png";
    let name = first + " " + last;

    return (
        <div id="present">
            <div id="nav">
                <Logo />
                <Logout />

                <div>
                    <Link id="navbox" to="/users">
                        Users
                    </Link>
                </div>
                <div>
                    <Link id="navbox" to="/">
                        Profile
                    </Link>
                </div>
                <div>
                    <Link id="navbox" to="/category">
                        Category
                    </Link>
                </div>
            </div>
        </div>
    );
}
