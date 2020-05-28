import fs from 'fs';
import path from 'path';
import process from 'process';
import marked from 'marked';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Article from './template/article.jsx';
import Abstract from './template/abstract.jsx';
import Nav from './component/Nav.jsx';


export default function gen() {
    let index = get_index();
    make_directory(index);
    show_index(index);
    gen_abstracts(index);
    gen_articles(index);
}

function make_directory(index) {
    let build = path.resolve(process.cwd(), './build');
    if (!fs.existsSync(build)) {
        fs.mkdirSync(build);
    }
    index.sections.forEach(s => {
        if (!fs.existsSync(path.join(build, s.name))) {
            fs.mkdirSync(path.join(build, s.name));
        }
    })
}

function show_index(index) {
    console.log('\n======[Document structure]======');
    index.sections.forEach((s, i) => {
        if (i !== 0) {
            console.log();
        }
        console.log('Section[' + (i + 1) + '] : ' + s.name);
        s.articles.forEach((a, i) => {
            console.log('  ' + (i + 1) + '. ' + a.name);
        });
    });
    console.log('================================\n');
}

function get_index() {
    let index = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), './article/index.json'), "utf-8"));
    for (let i = 0; i < index.sections.length; i++) {
        for (let j = 0; j < index.sections[i].articles.length; j++) {
            if (j === 0) {
                if (index.sections[i].articles[j + 1]) {
                    index.sections[i].articles[j].next = index.sections[i].articles[j + 1].name;
                }
            } else {
                index.sections[i].articles[j].prev = index.sections[i].articles[j - 1].name;
                if (index.sections[i].articles[j + 1]) {
                    index.sections[i].articles[j].next = index.sections[i].articles[j + 1].name;
                }
            }
        }

    }
    ;
    return index;
}

function get_article(s_name, a_name) {
    let str = fs.readFileSync(path.join(process.cwd(), 'article', s_name, a_name + '.md'), "utf-8");
    return marked(str);
}

function gen_articles(index) {
    let nav = <Nav index={index}/>;
    index.sections.forEach(s => {
        s.articles.forEach(a => {
            let content = get_article(s.name, a.name);
            let page = ReactDOMServer.renderToStaticMarkup(<Article nav={nav} content={content} s_name={s.name}
                                                                    a_name={a.name} prev={a.prev} next={a.next}/>);
            save_articles(page, s.name, a.name);
        })
    });
}

function save_articles(page, s_name, a_name) {
    fs.writeFile(path.join(process.cwd(), 'build', s_name, a_name + '.html'), page, (err => {
        if (err) {
            console.log(err);
        }
        process.exit(1);
    }))
}

function gen_abstracts(index) {
    let nav = <Nav index={index}/>;
    index.sections.forEach(s => {
        let links = s.articles.map(a => {
            return <li key={a.name}><a href={"../" + s.name + "/" + a.name + ".html"}>{a.name}</a></li>
        });
        let page = ReactDOMServer.renderToStaticMarkup(<Abstract nav={nav} s_name={s.name} abstract={s.abstract}
                                                                 links={links}/>);
        fs.writeFile(path.join(process.cwd(), 'build', s.name, 'index.html'), page, (err => {
            if (err) {
                console.log(err);
            }
            process.exit(1);
        }))
    });
}