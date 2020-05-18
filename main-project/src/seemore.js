import React from "react";
import { HashRouter, Link } from "react-router-dom";

// pass 'props' as an argument to get access to the info being passed down from the parent (App)
// we can also use destructuring to pull up the properties inside props
export default function Seemore({ length, seeMore, more }) {
    console.log("props in profilepic: ", length);

    return (
        <div>
            <h2>hiii {length}</h2>
            {more && <button onClick={() => seeMore()}>See More</button>}
        </div>
    );
}
