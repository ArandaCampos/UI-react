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
    border-radius: 6px;
    border: 2px solid gray;
    padding: 10px;
    padding-left: 15px;

    font-family: Ubuntu;
    font-size: 12px;
    letter-spacing: 0.4px;
    color: black;
    
    &:focus, select:focus {
        box-shadow: 0 0 0 0;
        outline: 0;
    }
`;

const ImgButton = styled.div`
    position: absolute;
    right: 15px;
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
            <Input placeholder="Password" type={type} />
            <ImgButton onClick={() => handle()}>
                <Img src={open} />
                <Block className={state}/>
            </ ImgButton >
        </Div>
    );
}

export default Password