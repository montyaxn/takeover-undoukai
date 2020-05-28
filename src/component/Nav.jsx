import React, {Fragment} from "react";

export default function Nav(props) {
    let slist = [];
    props.index.sections.forEach((s) => {
        // sectionごとにarticleのリストを作ってulで囲む
        let alist = s.articles.map((e) => {
            return <li key={e.name} className={"nav-element"}><a href={"../"+s.name+"/"+e.name+".html"}>{e.name}</a></li>
        });
        slist.push(<Fragment key={s.name}>
            <a className={"nav-section"} href={"../"+s.name+"/index.html"}>{s.name}</a>
            <ul className={"nav-list"}>{alist}</ul>
        </Fragment>);
    });
    return <nav className={"nav"}>{slist}</nav>;
}