import React from 'react'
import styled, { keyframes } from 'styled-components';
import icon from './images/icon.png'

const open = keyframes`
    from{
        visibility: hidden;
    }
    to{
        visibility: visible;
        width: 200px;
    }
`;

const translationNegative = keyframes`
    to{
        transform: translateX(-100px);
        width: 250px;
    }
`;

const SearchDiv = styled.div`
    position: relative;
    height: 50px;
    width: 50px;
    border-radius: 40px;
    background-color: #172026;


    & > a{
        position: absolute;
        right: 0px;

        height: 40px;
        width: 40px;
        border-radius: 50%;
        margin: 5px;
    }

    & > input{
        position: relative;
        left: 10px;
        top: 10px;
        
        height: 30px;
        width: 0px;
        border-radius: 50%;
        border: none;
        
        visibility: hidden;
        
        color: whitesmoke;
        background-color: #172026;
    }

    & > input:focus, select:focus {
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
    }

    & > a > img{
        position: absolute;
        left: 20%;
        top: 20%;
        height: 24px;
    }

    &:hover{
        animation: ${translationNegative} 1s forwards;
    }

    &:hover > a{
        background-color: #027368;
    }

    &:hover > input{
        animation: ${open} 1s forwards;
    }
`;

const Input = styled.input`
`; 


function Search() {

    return (
        <SearchDiv class="search">
            <input class="input-search"type="text" value="" placeholder="Search ..." />
            <a href="#">
                <img src={icon} alt="" />
            </a>    
        </SearchDiv>
    );
}

export default Search;