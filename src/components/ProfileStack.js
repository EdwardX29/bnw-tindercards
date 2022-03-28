import React from 'react';
import ActiveCard from './ActiveCard';
import './ProfileStack.css'

const profiles = [
    {
        "images" : ["bernard.webp"],
        "name" : "Bernard Marx",
        "age" : "23?",
        "distance" : 21, 
        "gender" : "Male",
        "sClass" : "Alpha-plus Α",
        "quote" : "I am a simp",
        "description" : "Hi I'm Bernard, who tf are you?",
        "id": 1
    },
    {
        "images" : ["lenina.webp"],
        "name" : "Lenina Crowne",
        "age" : 19,
        "distance" : 90,   
        "gender" : "Female",
        "sClass" : "Beta Β", 
        "quote" : "Ending is better than mending",
        "description" : "Lorem ipsum dolor sit amet ",
        "id" : 2,
    },
    {
        "images" : ["sam1.jpg", "sam2.jpg", "sam3.jpg", "sam4.jpg"],
        "name" : "Samuel H. Tran",
        "age" : "18",
        "distance" : 3, 
        "gender" : "Male",
        "sClass" : "Epsilon-minus Semi-moron Ε",
        "quote" : "Hi how are you?",
        "description" : "Hi I'm Sam, who tf are you?",
        "id" : 3
    },
    {
        "images" : ["jerry1.jpg", "jerry2.jpg", "jerry3.jpg"],
        "name" : "Jerry Wang",
        "age" : "18",
        "distance" : 4, 
        "gender" : "Male",
        "sClass" : "Epsilon-minus Semi-moron Ε",
        "quote" : "Jerry...il est assez retardé",
        "description" : "Bonjour. Tu es très grande.",
        "id" : 4
    },
    {
        "images" : ["preston1.jpg", "preston2.jpg", "preston3.jpg", "preston4.jpg"],
        "name" : "Preston",
        "age" : "18",
        "distance" : 4.5, 
        "gender" : "Male",
        "sClass" : "Epsilon-minus Semi-moron Ε",
        "quote" : "Toi! Qu'est-ce que tu fais?!",
        "description" : "Bonjour. Je vais te baiser sur la table.",
        "id": 5
    },
]


const ProfileStack = () => {
    
    const list = []

    profiles.forEach(profile => 
        list.push(<ActiveCard {...profile} />)       
        )

    
    return (
        <div>
            {list}
        </div>
    )

}

export default ProfileStack;