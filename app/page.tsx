"use client";

import styled from "styled-components";

import {useState} from "react";
import Link from "next/link";


const Heading = styled.h1`
    width: 100%;
    background-color: lightgray;
    text-align: center;
`;

const StyledText = styled.p`
    font-size: 1.2rem;
`;


const StyledDiv = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    font-family: Avenir, Helvetica, Arial, sans-serif;
`;


const Input = styled.input`
    padding: 5px;
    width: 20%;
`;

const StyledButton = styled(Link)`
    background-color: lightblue;
    border-radius: 15px;
    text-decoration: none;
    margin-top: 20px;
    padding: 10px;
    
    &:hover{
        background-color: cadetblue;
        color: white;
        text-decoration: none;
    }
`;

export default function Home(){
    const [city, setCity] = useState("");

    return (
        <StyledDiv>
            <Heading>Find the Weather in any city!</Heading>
            <StyledText>Enter a city name below to get the current weather</StyledText>
            <Input type="text" value={city} placeholder="City Name" onChange={(e) => setCity(e.target.value)} />
            <StyledButton href={`/${city}`}>Get Weather</StyledButton>
        </StyledDiv>
    );
}


