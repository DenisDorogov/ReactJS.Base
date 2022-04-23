import * as React from 'react';
import {useState} from 'react';


const Image = ({ render }) => { 
    return <div>{render("imageWrapper")}</div>; 
};

const Test = () => { 
    const [imageSrc, setImageSrc] = useState("someImgSrc"); 
    return ( 
    <Image render={(className) => ( 
    <div className={className}> 
        <img src={imageSrc} /> 
    </div> )} /> 
    ); 
};

export default Test;