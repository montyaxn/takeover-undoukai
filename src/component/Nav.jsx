import React, {Fragment} from "react";

export default function Nav(props) {
    let slist = [];
    props.index.sections.forEach((s) => {
        // sectionごとにarticleのリストを作ってulで囲む
        let alist = s.articles.map((e) => {
            return <li key={e.name} className={"nav-element"}><a href={"../" + s.name + "/" + e.name + ".html"}
                                                                 className={"nav-element-link"}>{e.name}</a></li>
        });
        slist.push(<Fragment key={s.name}>
            <a className={"nav-section"} href={"../" + s.name + "/index.html"}>{s.name}</a>
            <ul className={"nav-list"}>{alist}</ul>
        </Fragment>);
    });
    return <div className={"nav-wrapper"}>
        <h1><a href={"/index.html"}  className={"title"}>運動会引継</a></h1>
        <h2 className={"apartment"}>報道係</h2>
        <nav className={"nav"}>{slist}</nav>
    </div>;
}