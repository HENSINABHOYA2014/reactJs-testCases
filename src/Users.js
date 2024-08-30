import React from "react";
import { render } from "@testing-library/react";

export default class Users extends React.Component {

    getUserList(a,b) {
        return a+b;
    }
    render() {
        return (<>
            <h2>Users Class Component</h2>
        </>)
    }
}