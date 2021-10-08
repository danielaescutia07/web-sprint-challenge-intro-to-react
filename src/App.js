import React, { useState, useEffect } from 'react';
import './App.css';

import axios from 'axios';
import Character from './components/Character';


import styled from 'styled-components';


const StyleAll = styled.div `
  font-family: ${props => props.theme.font};
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  margin: auto;
  
`

const App = () => {
  const [character, setCharacter] = useState([]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
      .then(res => {
        console.log(res);
        setCharacter(res.data);
      }).catch(err => {
        console.error(err);
      })
  }, [])
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <StyleAll >
       
        
          {character.map(char => {
            return <Character character={char.name} dob={char.birth_year} gender={char.gender} height={char.height} hair={char.hair_color} key={char.url} />
          })}
      </StyleAll>
    </div>
  );
}

export default App;
