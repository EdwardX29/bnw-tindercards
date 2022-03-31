import React, {useState} from 'react';
import './PictureSlider.css';

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
                backgroundImage: `url(${props.images[index]})`
                }}
        >
            {  index > 0 ? 
            <img src="left.svg" className="arrow" alt="left-arrow-icon" 
            onClick={() => decreaseIndex()}/ >   
            : <div></div>
            } 
                
            {  index < props.images.length-1 ? 
            <img src="right.svg" className="arrow" alt="right-arrow-icon" 
            onClick={() => increaseIndex()}/> 
            : <div></div>}
        </div>
 
    )


}


export default PictureSlider;