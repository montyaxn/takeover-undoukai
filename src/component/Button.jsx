import React,{Fragment} from "react";

export function LinkPrev(props) {
    if(!props.link) return <Fragment></Fragment>;
    return <div className={"link link-prev"}>
        Prev : <a href={"./"+props.link+".html"} className={"link-link"}>{props.link}</a>
        </div>
}

export function LinkNext(props) {
    if(!props.link) return <Fragment></Fragment>;
    return <div className={"link link-next"}>
            Next : <a href={"./"+props.link+".html"} className={"link-link"}>{props.link}</a>
        </div>;
}