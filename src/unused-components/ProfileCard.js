import React  from 'react';
import PictureSlider from './PictureSlider';
import './ProfileCard.css';

const ProfileCard = (props) => {

    return (
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
                    <img id="location-icon" src="/location.svg" alt="location icon"/>
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
        </div>

    )
}

export default ProfileCard;