import React, {Fragment} from "react";
import {LinkNext, LinkPrev} from "../component/Button.jsx";

export default function Article(props) {
    return <Fragment>
        <html>
        <head>
            <meta charSet="UTF-8"/>
            <title>{props.s_name + '-' + props.a_name}</title>
            <link href={"../article.css"} rel={"stylesheet"}/>
        </head>
        <body>
        {props.nav}
        <div className={"content-wrapper"}>
            <main>
                <article id="article" dangerouslySetInnerHTML={{__html: props.content}}/>
                <div className={"link-wrapper"}>
                    <LinkPrev link={props.next}/>
                    <div className={"link-empty"}> </div>
                    <LinkNext link={props.prev}/>
                </div>
            </main>
        </div>
        </body>
        </html>
    </Fragment>
        ;
}