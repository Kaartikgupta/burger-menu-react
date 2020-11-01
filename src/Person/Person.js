import React from 'react';

const person=(props)=>{
    return(
        <div>
        <p>hello, this is {props.name} again!!</p>
        <p>{props.children}</p>
        </div>
    )
}

export default person;