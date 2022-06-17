import React , { useState } from 'react';
import styled , { keyframes } from 'styled-components';

const Up = keyframes`
    100%{
        left: -77px;
        top: 15px;
    }
`;

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`; 

const Label = styled.span`
    height: 30px;
    width: 80px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: relative;
    top: 42px;
    left: -72px;

    background-color: white;
    transition: 2s;

    & > p{
        font-size: 15px;
        color: grey;
    }
    
    &.on{
        animation: ${Up} 0.2s ease-in-out forwards;
    }

    &.on > p{
        font-size: 13px;
        color: #0695D4;
    }
`;

const Input = styled.input`
    height: 50px;
    width: 230px;
    padding-left: 15px;
    border: 2px solid #0695D4;
    border-radius: 5px;

    &:focus, select:focus {
        outline: 0;
    }
`;

function InputLabel({ label }){

    const [ click, setClick ] = useState('');

    return (
        <Div >
            <Label className={click}>
                <p>{label}</p>
            </Label>
            <Input onFocus={() => {setClick('on')}}/>
        </ Div>
    )
}

export default InputLabel;