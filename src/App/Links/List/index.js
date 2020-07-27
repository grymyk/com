import React from 'react'

function Item(props) {
    return <li>
        <a href={props.href}>{props.text}</a>
    </li>
}


function List(props) {
    // const numberToItem = (number, index) => <li key={index}>{number}</li>;
    const numberToItem = (number, index) => {
        return <Item key={number.id} value={number} />;
    };

    const listItem = props.data.map(numberToItem);

    return (
        <>
            <h2>{props.title}</h2>
            <ul>{listItem}</ul>
        </>
    );
}

export default List;
