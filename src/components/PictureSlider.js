import React, {useState} from 'react';
import './PictureSlider.css';
import {motion} from "framer-motion"

const PictureSlider = (props) => {

    const [index, setIndex] = useState(0);

    const increaseIndex = () => {
        if (index !== props.images.length-1){
            setIndex(index+1);
        }
    }

    const decreaseIndex = () => {
        if (index !== 0){
            setIndex(index-1);
        }
    }

    return (
        <div 
            className="image-container" 
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/${props.images[index]})`
                }}
        >
            {  index > 0 ? 
                    <img src={`${process.env.PUBLIC_URL}/left.svg` } className="arrow" alt="left-arrow-icon" 
                    onClick={() => decreaseIndex()}/ >   
               : <div style={{width:"50px"}}></div>
            } 

            {
                props.clicked === "heart" ? 
                    <motion.img 
                        id="heartFeedback" src={`${process.env.PUBLIC_URL}/heart2.svg`} 
                        alt="heart icon"
                        animate={{opacity:0.9}}
                        transition={{duration:0.2}}
                    />
                : props.clicked === "declined" ? 
                    <motion.img 
                        id="declineFeedback" 
                        src={`${process.env.PUBLIC_URL}/x.svg`} 
                        alt="decline icon" 
                        animate={{opacity:0.9}}
                        transition={{duration:0.2}}    
                    />
                : null
            }
                
            {  index < props.images.length-1 ? 
            <img src={`${process.env.PUBLIC_URL}/right.svg` } className="arrow" alt="right-arrow-icon" 
            onClick={() => increaseIndex()}/> 
            : <div style={{width:"50px"}}></div>}
        </div>
    )


}


export default PictureSlider;