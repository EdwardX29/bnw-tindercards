import React, {useState}from 'react';
import ActiveCard from './ActiveCard';
import './ProfileStack.css'

const profiles = [
    {
        "images" : ["bernard.webp","bernard1.png", "bernard2.png"],
        "name" : "Bernard Marx",
        "age" : "20",
        "distance" : 21, 
        "gender" : "Male",
        "sClass" : "Alpha Plus Α",
        "quote" : "I did not have alcohol in my blood surrogate",
        "description" : "I used to be lonely, insecure, and isolated, but I’m now I’m popular. Not like the other Alphas. Supports anti-social ideologies and rebellion against the World State. If you swipe right, I’ll let you meet the savage.",
        "id": 1
    },
    {
        "images" : ["lenina.webp", "lenina2.png", "lenina3.png"],
        "name" : "Lenina Crowne",
        "age" : 19,
        "distance" : 90,   
        "gender" : "Female",
        "sClass" : "Beta Plus Β", 
        "quote" : "A Gramme is Better Than a Damn",
        "description" : "Looking for someone to go on soma     holiday with ;). Enjoys working in the conditioning hatchery, cute outfits, and Malthusian belts with contraceptives. Hates the savage reservation (except if your John). I am very pneumatic!!",
        "id" : 2,
    },
  {
        "images" : ["foster1.png", "foster2.png", "foster3.png"],
        "name" : "Henry Foster",
        "age" : 23,
        "distance" : 30,   
        "gender" : "Male",
        "sClass" : "Alpha Plus Α", 
        "quote" : "Everyone Works for Everyone Else",
        "description" : "Perfectly fit, happy, and conditioned. Your typical upper-caste citizen.  A functional member of the World State. Works in the Hatchery. Loves pneumatic women and doing soma.",
        "id" : 3,
    
  },

  {
        "images" : ["mm1.png", "mm2.png", "mm3.png"],
        "name" : "Mustapha Mond",
        "age" : 40,
        "distance" : 70,   
        "gender" : "Male",
        "sClass" : "Alpha Plus Plus Α", 
        "quote" : "One believes things because one has been conditioned to believe them",
        "description" : "The most powerful and influential man in the World State. Enjoys intellectual and philosophical conversations. Knows Shakespeare, the bible, and all of history. Trying to achieve stability and happiness for all humankind.",
        "id" : 4, 
  },
  {
        "images" : ["john1.png", "john2.png", "john3.png"],
        "name" : "John (the Savage)",
        "age" : 18,
        "distance" : 200,   
        "gender" : "Male",
        "sClass" : "Savage", 
        "quote" : "Don’t you even know what manhood and freedom are?",
        "description" : "White son of Director of Hatcheries and Conditioning and Linda. Grew up in the Savage Reservation. Hates hedonism; renounced all worldly pleasures. Loves reading Shakespeare in my free time.",
        "id" : 5, 
    
  }
  
  
]


const ProfileStack = () => {

    const [stackIndex, setStackIndex] = useState(profiles.length-1)
    
    const goBack = () => {
        if (stackIndex < profiles.length-1){
            console.log("Let's go back")
            setStackIndex(stackIndex+1)
        }

    }

    const swipeRight = () => {

        if (stackIndex >= 0){
            console.log("Let's swipe right")
            setStackIndex(stackIndex-1)
        }

    }

    const swipeLeft = () => {

        if (stackIndex >= 0){
            console.log("Let's swipe left")
            setStackIndex(stackIndex-1)
        }

    }

    return (
        <div className="profileStack">
            <button className="backBtn" onClick={() => goBack() }>Go Back!</button>

            {stackIndex >= 0 && <ActiveCard key={stackIndex} {...profiles[stackIndex]} swipeRight={() => swipeRight()} swipeLeft={() => swipeLeft()}/>}
        </div>
    )

}

export default ProfileStack;