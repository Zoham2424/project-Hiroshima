import React from 'react';
import '../App.css';

export const sm = {width: "30%", height: "30%"};
export const md = {width: "50%", height: "50%"};
export const lg = {width: "100%", height: "100%"};


export const Box = ({ size = "", children }) => {


let dimensions;
    switch(size) {
        case 'sm' || 'small' || 'S':
            dimensions = sm;
            break;
        case 'md' || 'medium' || 'M':
            dimensions = md;
            break;
        case 'lg' || 'large' || 'L':
            dimensions= lg;
            break;
        default:
            dimensions = lg; 
    }
    return (
        <div className="box" style={{ ...dimensions}} >   
            {children}
        </div>
    );
};

export default Box;