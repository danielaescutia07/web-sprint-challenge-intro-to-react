// Write your Character component here
import React, { useState } from "react";
import Details from './Details';

export default function Character(props) {
    const { character, data } = props;

    const [currentCharacter, setCurrentCharacter] = useState(null);

    const openDetails = id => {
        setCurrentCharacter(id)
    }

    const closeDetails = () => {
        setCurrentCharacter(null)
    }

    return (
        <div>
            <h2>{character}</h2>
            <button onClick={() => openDetails(data.url)}>Details</button>
            {currentCharacter && <Details characterId={currentCharacter} close={closeDetails} />}
        </div>
    )
}