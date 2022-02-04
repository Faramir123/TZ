import React from 'react';

function Item({name, id}) {
    return (
        <div key={id}>{name}</div>
    )
}

export default Item;
