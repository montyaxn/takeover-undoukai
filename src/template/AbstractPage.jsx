import React from "react";
import {Fragment} from "react";
import Abstract from "../component/Abstract.jsx";

export default function AbstractPage(props) {
    return (
        <Fragment>
            <html>
            <head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <title>{props.s_name+'概要'}</title>
                <link href={"../abstract.css"} rel={"stylesheet"}/>
            </head>
            <body>
            {props.nav}
            <div className={"content-wrapper"}>
                <main>
                    <Abstract title={props.s_name} abstract={props.abstract} links={props.links}/>
                </main>
            </div>
            </body>
            </html>
        </Fragment>
    );
}