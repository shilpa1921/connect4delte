import React from "react";
import axios from "./axios";

import ProfilePic from "./profilePic";

import { BrowserRouter, Route } from "react-router-dom";
import Seemore from "./seemore";
import { useStore } from "react-redux";
import { HashRouter, Link } from "react-router-dom";

export default class Category extends React.Component {
    constructor(props) {
        console.log("props in uploader", props);
        super(props);
        this.state = {
            user: [],
            more: true,
        };
    }

    componentDidMount() {
        console.log("Category mounted");
        axios.post("/category-1").then((res) => {
            console.log("response in category1", res);
            console.log(
                "response in category after setstate1",
                res.data.length
            );
            this.setState({
                user: res.data,
                length: res.data.length,
            });

            console.log(
                "response in category after setstate11111",
                this.state.name
            );
        });
    }

    submit(e) {
        console.log("value in button", e.target.value);
        this.setState({
            more: false,
        });
        let cat = e.target.value;
        if (cat == "all") {
            this.setState({
                more: true,
            });
        }
        axios.post("/category", { cat }).then((res) => {
            console.log("response in category", res);
            this.setState({
                user: res.data,
            });
            console.log("response in category after setstate", this.state.user);
        });
    }
    seeMore() {
        var lastId = { id: this.state.user[this.state.user.length - 1].id };
        console.log(
            "Shilpa in category but seeing in seeMore",
            lastId,
            this.state.user
        );
        let arr = this.state.user;
        axios
            .post("/morePost", lastId)
            .then((response) => {
                console.log("res from morePost", response, this.state.user);
                var lowestId =
                    response.data[response.data.length - 1].lowest_id;
                var lastId = response.data[response.data.length - 1].id;
                if (lastId === lowestId) {
                    this.setState({
                        more: false,
                    });
                }
                arr.push(...response.data);
                this.setState({
                    user: arr,
                });
            })

            .catch(function (err) {
                console.log("Error in POST /get-more: ", err);
            });
    }

    render() {
        return (
            <div id="category-modal-div">
                <div id="cat-nav">
                    <button
                        onClick={(e) => this.submit(e)}
                        value="Eye specialist"
                    >
                        Eye specialist
                    </button>
                    <button
                        onClick={(e) => this.submit(e)}
                        value="Dermatologists"
                    >
                        Dermatologists
                    </button>
                    <button onClick={(e) => this.submit(e)} value="all">
                        All
                    </button>
                </div>
                <ul>
                    {this.state.user.map((user, key) => (
                        <div id="findPeople" key={user.id}>
                            <div>
                                <ProfilePic
                                    first={user.first_name}
                                    last={user.last_name}
                                    city={user.city}
                                    imageUrl={user.pic_url}
                                    id={user.id}
                                />
                            </div>
                        </div>
                    ))}
                </ul>
                <div id="seemore">
                    {this.state.more && (
                        <button onClick={(e) => this.seeMore(e)}>
                            See More
                        </button>
                    )}
                </div>
            </div>
        );
    }
}
