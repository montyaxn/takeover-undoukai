import React, {Fragment} from "react";

export default function Article(props) {
    return <Fragment>
        <html>
        <head>
            <meta charSet="UTF-8"/>
            <title>{props.s_name + '-' + props.a_name}</title>
        </head>
        <body>
        {props.nav}
        <div id={"contentWrapper"}>
            <article id="article" dangerouslySetInnerHTML={{__html:props.content}}/>
        </div>
        </body>
        </html>
    </Fragment>
        ;
}