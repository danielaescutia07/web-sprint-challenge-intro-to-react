// Write your Character component here
import React from "react";
import styled from "styled-components";

const CharacterStyled = styled.div `
    color: ${props => props.theme.color};
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    width: 40%;
    margin: auto;
    
`
const H2 = styled.h2 `font-size: 3rem;`

const PDiv = styled.div `
    
`

export default function Character(props) {
    const { character, dob, gender, height, hair } = props;

   

    return (
        <CharacterStyled>
            <H2>{character}</H2>
                <PDiv>
                    <p>Birth Year: {dob}</p>
                    <p>Gender: {gender}</p>
                    <p>Height: {height}</p>
                    <p>Hair Color: {hair}</p>
                </PDiv>
        </CharacterStyled>
    )
}