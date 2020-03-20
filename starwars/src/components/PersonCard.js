import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    border: 4px solid black;
    border-radius: 20px;
    display:flex;
    width: 30%;
    flex-direction: column;
    justify-content: space-between;
    margin: 20px;
    font-family: 'Stardos Stencil', cursive;
    background-color: black;
    // color: white;
`
const Name = styled.h1`
    background-color: yellow;
`

const Birth = styled.h2`
    color: white;
`

const Films = styled.h2`
    color: white;
`
const Gender = styled.h2`
    color: white;
`

const PersonCard = props => {
    return (
        <Container>
            <Name>Name: {props.name}</Name>
            <Birth>Birth Year: {props.birthYear}</Birth>
            <Films>Films: {props.films}</Films>
            <Gender>Gender: {props.gender}</Gender>
        </Container>
    )
}

export default PersonCard;