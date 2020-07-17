import React, { Fragment } from "react";

export default function Abstract(props) {
    return <Fragment>
        <h1>{props.title}</h1>
        <p>{props.abstract}</p>
        <ul>{props.links}</ul>
    </Fragment>
}