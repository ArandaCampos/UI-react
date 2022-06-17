import React from 'react';
import styled from 'styled-components';
import CircleImg from '../../image/circle/CircleImage';

const Card = styled.div`
    height: 300px;
    width: 250px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border-radius: 20px;
    background-color: #17141d;
    box-shadow: -1rem 0 3rem #000;

    &:hover > .line > .full {
        width: 210px;
        transition: 0.6s ease-out;
    }
    
    &:hover{
        transform: translateY(-30px);
        transition: 0.5 ease-out;
    }
`;
  
const Position = styled.div`
    position: relative;
    top: 5px;
`;

const Line = styled.div`
    position: relative;
    top: 20px;
    height: 5px;
    width: 210px;
    background-color: #2e3033;
`;

const Full = styled.div`
    position: absolute;
    top: 0px;
    z-index: 1;
    width: 0px;
    height: 100%;
    background-color: rgb(0,154,217);
    background: linear-gradient(90deg, #DAFDBA 0%, #45C4B0 65%, #012030 100%);
    transition: 0.4s ease-out;

`;

const DataSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    top: 10px;
    left: -10px;
`;

const Title = styled.h2`
    position: relative;
    top: 20px;
    font-family: 'Open Sans', sans-serif;
    color: white;
    font-size: larger;
    font-weight: 500;
`;

const Subtitle = styled.p`
    font-family: 'Open Sans', sans-serif;
    color: white;
    position: relative;
    top: -10px;
    font-weight: 300;
    font-size: medium;
`;

function DarkCard({ src, title, description }){
    return (
        <Card >
            <Position >
                <CircleImg src={src} />
            </Position>
            <Line className="line" >
                <Full className="full" />
            </Line> 
            <DataSection >
                <Title >{title}</ Title>
                <Subtitle >{description}</Subtitle>
            </ DataSection>
        </Card>
    );
}

export default DarkCard;
