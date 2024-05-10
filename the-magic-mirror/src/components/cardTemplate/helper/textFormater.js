import React from "react";

export function parseSpaceFunction (text) {
    const newText = text.split('\n').map(str =><p id={'oracle'} key={str.id}>{str}</p>);
    
    return newText;
}