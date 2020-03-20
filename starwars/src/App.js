import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import PersonCard from "./components/PersonCard"

const App = () => {
  //set state
  const [people, setPeople] = useState([]);

  //useEffect for axios call  here
  useEffect(() =>{
    axios.get("https://swapi.co/api/people/")
    .then(response =>{
      console.log(response.data.results);
      setPeople(response.data.results);

    })
    .catch(error =>{
      console.log("couldn't get the data", error)
    })
  }, []);


  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>

      {people.map((person, index) =>{
        console.log(person);

        return (
          <PersonCard
            key={index}
            name={person.name}
            birthYear={person.birth_year}
            films={person.films.length}
            gender={person.gender}
          />
        )

      })}
    </div>
  );
}

export default App;






  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.