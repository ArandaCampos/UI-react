import React, { useState, useEffect } from 'react';
import styled , { keyframes } from 'styled-components';

const animate = keyframes`
    0%, 100%{
        opacity: 1;
    }
    50%{
        opacity: 0;
    }
`;

const Div = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@700&display=swap');

    display: flex;
    flex-direction: row;
    gap: 0;
    justify-content: center;
`;

const OnScreen = styled.h3`
    text-size: 18px;
    font-family: 'Merriweather', serif;
    color: black;
`;

const Bar = styled.h3`
    text-size: 22px;    
    font-family: 'Merriweather', serif;
    color: black;
    position: relative;
    top: -1px;
    left: -1px;

    animation: ${animate} 1.5s infinite linear;
`;


function Typing({text}){

    const [ typing, setTyping ] = useState("");
    const [ i, setI ] = useState(0)
            
    useEffect(() => {
        setTimeout(() => {
            if (i <= text.toString().length){
                setTyping(text.slice(0, i));
                setI((i) => i + 1)
            }
        }, 100);
    }); 

    return (
        <Div >
            <OnScreen>{typing}</OnScreen>
            <Bar >|</ Bar>
        </ Div>
    );
}

export default Typing;