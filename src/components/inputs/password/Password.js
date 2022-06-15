import React, { useState } from "react";
import styled from "styled-components";
import open from "./img/open-eye.png";

const width = `230px`;

const Div = styled.div`
    position: relative;
`;

const Input = styled.input`
    height: 25px;
    width: ${width};
    border-radius: 40px;
    border: 2px solid black;
    padding: 10px;
    padding-left: 20px;

    font-family: Ubuntu;
    font-size: 14px;
    letter-spacing: 0.4px;
`;

const ImgButton = styled.div`
    position: absolute;
    right: 20px;
    top: 25%;
    height: 25px;

    cursor: pointer;
`;

const Img = styled.img`
    height: 100%;
`;

const Block = styled.div`
    position: absolute;
    right: 11px;
    top: 0.5%;    
    height: 100%;
    width: 2px;
    background: black;
    transform: rotate(45deg);
    border-right: 1px solid white;

    &.on{
        background: transparent;
        border: none;
    }
`

function Password(){

    const [ state , setState ] = useState("")
    const [ type, setType] = useState('password')
    
    function handle(){
        state === "" ? setState("on") : setState("");
        type === 'password' ? setType('text') : setType('password')
    }

    return (
        <Div>
            <Input placeholder="password" type={type} />
            <ImgButton onClick={() => handle()}>
                <Img src={open} />
                <Block className={state}/>
            </ ImgButton >
        </Div>
    );
}

export default Password