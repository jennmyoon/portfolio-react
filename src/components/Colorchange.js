import React,{useEffect, useState} from "react";


function ColorChange(props){

    // const array = [1,2,3,4,5,6,7]
    // let arrayIndex = 0; 
    



    // const [currStyle, setStyle] = useState(styles[0]);
    // const[stylesIndex, setIndex] = useState(0);

    // // useEffect(() =>{
    // //     setStyle(styles[stylesIndex])
    // // }, [stylesIndex]); 


    // const handleClick = () =>{
    //     setIndex((prevIndex)=>(prevIndex+1) % styles.length); 
    // }
    return(
        <> 
            <button
                onClick={props.changeTheme} 
            >
            </button>
        </>
    ); 
}

export default ColorChange; 