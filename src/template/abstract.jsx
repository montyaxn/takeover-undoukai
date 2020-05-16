import React from "react";
import {Fragment} from "react";

export default function Abstract(props) {
    return (
        <Fragment>
            <html>
            <head>
                <meta charSet="UTF-8"/>
                <title>{props.s_name+'概要'}</title>
            </head>
            <body>
            {props.nav}
            <div className={"contentWrapper"}>
                <article id="abstract" dangerouslySetInnerHTML={{__html:props.content}}/>
            </div>
            </body>
            </html>
        </Fragment>
    );
}