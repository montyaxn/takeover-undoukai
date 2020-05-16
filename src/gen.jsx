import fs from 'fs';
import path from 'path';
import process from 'process';
import marked from 'marked';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Article from './template/article.jsx';
import Abstract from './template/abstract.jsx';
import Nav from './component/nav.jsx';


export default function gen() {
    let index = get_index();
    make_directory(index);
    show_index(index);
    gen_abstracts(index);
    gen_articles(index);
}

function make_directory(index) {
    let build = path.resolve(process.cwd(), './build');
    if (!fs.existsSync(build)){
        fs.mkdirSync(build);
    }
    index.sections.forEach(s=>{
        if (!fs.existsSync(path.join(build,s.name))){
            fs.mkdirSync(path.join(build,s.name));
        }
    })
}

function show_index(index) {
    console.log('\n======[Document structure]======');
    index.sections.forEach((s,i)=>{
        if(i!==0){
            console.log();
        }
        console.log('Section['+(i+1)+'] : '+s.name);
        s.articles.forEach((a,i)=>{
            console.log('  '+(i+1)+'. '+a);
        });
    });
    console.log('================================\n');
}

function get_index() {
    return JSON.parse(fs.readFileSync(path.resolve(process.cwd(), './article/index.json'), "utf-8"));
}

function get_article(s_name, a_name) {
    let str = fs.readFileSync(path.join(process.cwd(), 'article', s_name, a_name + '.md'), "utf-8");
    return marked(str);
}

function gen_articles(index){
    let nav = <Nav index={index}/>;
    index.sections.forEach(s => {
        s.articles.forEach(a => {
            let content = get_article(s.name, a);
            let page = ReactDOMServer.renderToStaticMarkup(<Article nav={nav} content={content} s_name={s.name} a_name={a}/>);
            save_articles(page, s.name, a);
        })
    });
}

function save_articles(page, s_name, a_name) {
    fs.writeFile(path.join(process.cwd(), 'build', s_name, a_name+'.html'), page, (err => {
        if (err) {
            console.log(err);
        };
        process.exit(1);
    }))
}

function gen_abstracts(index) {
    let nav = <Nav index={index}/>;
    index.sections.forEach(s => {
        let page = ReactDOMServer.renderToStaticMarkup(<Abstract nav={nav} content={s.abstract} s_name={s.name}/>);
        fs.writeFile(path.join(process.cwd(), 'build', s.name, 'index.html'), page, (err => {
            if (err) {
                console.log(err);
            };
            process.exit(1);
        }))
    });
}