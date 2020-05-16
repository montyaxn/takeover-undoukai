import React, {Fragment} from "react";

export default function Nav(props) {
    let slist = [];
    props.index.sections.forEach((s) => {
        // sectionごとにarticleのリストを作ってulで囲む
        let alist = s.articles.map((e) => {
            return <li key={e} className={"nav-element"}>{e}</li>
        });
        slist.push(<Fragment key={s.name}>
            <a className={"nav-section"}>{s.name}</a>
            <ul className={"nav-list"}>{alist}</ul>
        </Fragment>);
    });
    return <nav id={"navigation"}>{slist}</nav>;
}