"use client";

import {useParams} from "next/navigation"
import useSWR from "swr";
import WeatherCard from "../components/weatherCard";
import styled from "styled-components";
import {Weather} from "@/app/interfaces/weather";

const WeatherContentWrapper = styled.main`
    width: 80vw;
    margin: auto;
    background-color: lightblue;
    border-radius: 15px;
`;


const CityName = styled.h1`
    color: blueviolet;
    text-align: center;
    font-family: Avenir, Helvetica, Arial, sans-serif;
`;

const WeatherCardsContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    margin: 1rem;
    text-align: center;
`;

export default function CityPage(){
    const params = useParams();

    const{ data, error } = useSWR(
        `/api/getWeatherData?city=${params.city}`,
        (url) => fetch(url).then((res) => res.json())
    );

    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;

    const days = data?.days || [];

    return (
        <WeatherContentWrapper>
            <CityName>{params.city}</CityName>
            <WeatherCardsContainer>
                {
                    days.map((weather: Weather, i: number) =>
                        (
                            <WeatherCard
                                key={i}
                                datetime={weather.datetime}
                                conditions={weather.conditions}
                                description={weather.description}
                                tempmin={weather.tempmin}
                                tempmax={weather.tempmax}
                            />
                        )
                    )
                }
            </WeatherCardsContainer>
        </WeatherContentWrapper>
    );
}

