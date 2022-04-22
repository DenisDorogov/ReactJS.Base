const Image = ({ render }) => { 
    return <div>{render("imageWrapper")}</div>; 
};

const App = () => { 
    const [imageSrc, setImageSrc] = useState("someImgSrc"); 
    return ( 
    <Image render={(className) => ( 
    <div className={className}> 
        <img src={imageSrc} /> 
    </div> )} /> 
    ); 
};