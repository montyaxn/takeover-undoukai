import React from "react";
import {Fragment} from "react";

export default function Abstract(props) {
    return (
        <Fragment>
            <html>
            <head>
                <meta charSet="UTF-8"/>
                <title>{props.s_name+'概要'}</title>
                <link href={"../abstract.css"} rel={"stylesheet"}/>
            </head>
            <body>
            {props.nav}
            <div className={"content-wrapper"}>
                <main>
                    <h1>{props.s_name}</h1>
                    <p>{props.abstract}</p>
                    <ul>{props.links}</ul>
                </main>
            </div>
            </body>
            </html>
        </Fragment>
    );
}