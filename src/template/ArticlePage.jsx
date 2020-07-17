import React, {Fragment} from "react";
import {LinkNext, LinkPrev} from "../component/Button.jsx";

export default function ArticlePage(props) {
    return <Fragment>
        <html>
        <head>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <title>{props.s_name + '-' + props.a_name}</title>
            <link href={"../article.css"} rel={"stylesheet"}/>
        </head>
        <body>
        {props.nav}
        <div className={"content-wrapper"}>
            <main>
                <article id="article" dangerouslySetInnerHTML={{__html: props.content}}/>
                <div className={"link-wrapper"}>
                    <LinkPrev link={props.prev}/>
                    <div className={"link-empty"}> </div>
                    <LinkNext link={props.next}/>
                </div>
            </main>
        </div>
        </body>
        </html>
    </Fragment>
        ;
}