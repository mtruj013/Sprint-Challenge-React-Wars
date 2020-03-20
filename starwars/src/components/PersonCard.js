import React from 'react'

const PersonCard = props => {
    return (
        <div>
            <h1>Name: {props.name}</h1>
            <p>Birth Year: {props.birthYear}</p>
            <p>Films: {props.films}</p>
            <p>Gender: {props.gender}</p>
        </div>
    )
}

export default PersonCard;