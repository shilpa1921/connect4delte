import React from "react";
import Presentational from "./presentational";
import BioEditor from "./bioeditor";
export default function Profie({
    first,
    last,
    imageUrl,
    toggleModal,
    qulification,
    city,
    specialization,
}) {
    imageUrl = imageUrl || "default.png";

    return (
        <div id="profilepage">
            <img onClick={toggleModal} id="pic-in-profile" src={imageUrl}></img>
            <h1>
                {first} {last}
                {qulification}
                {specialization}
            </h1>
            <h1>{city}</h1>
        </div>
    );
}
