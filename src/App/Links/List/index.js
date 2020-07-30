import React from 'react'

import './links.scss'

function Item(props) {
    let data = props.link;

    return <li>
            <a href={data.href}>{data.text}</a>
        </li>
}

function Heading(props) {
    return <h2 key={props.title}>{props.title}</h2>
}

let getLinks = (data) => {
    let links = [];

    for (const name in data) {
        links.push(data[name])
    }

    return links;
}

function Sphere(props) {
    let links = getLinks(props.works)

    const listItem = links.map( (link) => {
        return <Item key= {link.id} link = {link} />
    })

    return (
        <div className = "sphere">
            <Heading key = {props.head} title = {props.head} />
            <ul>{listItem}</ul>
        </div>
    )
}

function List(props) {
    let headers = Object.getOwnPropertyNames(props.data);

    let links = headers.map( (head) => {
        return <Sphere key={head} head={head} works={props.data[head]} />
    });

    return (
        <div className="links_holder">
            {links}
        </div>
    );
}

export default List;
