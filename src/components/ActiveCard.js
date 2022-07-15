import React from 'react';
import PictureSlider from './PictureSlider';
import './ActiveCard.css'
const ActiveCard = (props) => {

    return (
        <>

            <div className="card">
            <PictureSlider images={props.images} />

            <div className="user-info">
                <div className="basic-info">
                    <div className="name">
                        {props.name}
                    </div>
                    <div className="age">
                        {props.age}
                    </div>
                </div>
                <div className="location">
                    <img id="location-icon" src={`${process.env.PUBLIC_URL}/location.svg` } alt="location icon"/>
                    <span>{props.distance} km away</span>
                </div>
                <div className="demographics">
                    {props.gender}, {props.sClass}
                </div>
            </div>

            <div className="description">
                <div className="quote">
                    <q>{props.quote}</q>
                </div>
                <div>
                    {props.description}
                </div>
            </div>
                <div className="rating-container">
                    <img className="rate" id="decline" src={`${process.env.PUBLIC_URL}/x.svg` } alt="decline icon" onClick={() => props.swipeLeft()}/>
                    <img className="rate" id="heart" src={`${process.env.PUBLIC_URL}/heart2.svg` } alt="heart icon" onClick={() => props.swipeRight()}/>
                </div>
            </div>

        </>
    )   
}

export default ActiveCard;