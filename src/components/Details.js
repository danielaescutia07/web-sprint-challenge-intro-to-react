import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react/cjs/react.development";


export default function Details(props) {
    const { characterId, close } = props;

    const [details, setDetails] = useState(null);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/`)
            .then(resp => {
                setDetails(resp.data);
            }).catch(err => {
                console.error(err);
            })
    },[characterId])

    return (
        <div>
            <h3>Details</h3>
            {details &&
            <ul>
                <li>Birth Year: {details.birth_year}</li>
                <li>Gender: {details.gender}</li>
                <li>Height: {details.height}</li>
                <li>Hair Color: {details.hair_color}</li>
            </ul>
            }
            <button onClick={close}>Close</button>
        </div>
    )
}