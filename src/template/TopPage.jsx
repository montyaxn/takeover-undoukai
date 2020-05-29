import React, {Fragment} from "react";
import Abstract from "../component/Abstract.jsx"

export default function TopPage(props) {
    return <Fragment>
        <html>
        <head>
            <meta charSet="UTF-8"/>
            <title>{"報道係引き継ぎ"}</title>
            <link href={"./article.css"} rel={"stylesheet"}/>
        </head>
        <body>
        {props.nav}
        <div className={"content-wrapper"}>
            <main>
            <Abstract title={"報道係引き継ぎ資料"} abstract={"報道係の149thから150thへの引き継ぎ資料であります。来年も頑張ってね。"} links={props.links}/>
            <p>一応連絡先を乗っけときます。E-mail: zanka.bgl@gmail.com 2020年度に置ける四桁番号: 5828</p>
            </main>
        </div>
        </body>
        </html>
    </Fragment>
        ;
}