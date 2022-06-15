import React, { useState } from 'react'
import styled from 'styled-components';

const width = '100px'
const height = '100px'

const Button = styled.div`
    width: ${width};
    height: ${height};
    position: absolute;
    top: 200px;
    left: 200px;
    cursor: pointer;  
;`

const LineLeft = styled.canvas`
    height: 90%;
    border: calc(${width} / 100) solid red;
    position: absolute;    
    left: calc(${width} * 0.05);
    top: calc(${height} * 0.05);
    transition: 
        width 200ms, height 200ms, 
        transform 200ms, background-color 200ms ;

    &.on{
        height: 85%;
        border-color: #213866;
        transform: translateX(calc(${width} * 0.92 / 2)) rotate(45deg);
    }


`;

const Line2 = styled.canvas`
    height: 90%;
    border: calc(${width} / 100) solid #8EABE6;
    position: absolute;    
    right: calc(${width} * 0.03);
    top: calc(${width} * 0.05);
    transition: 
        width 200ms, height 200ms, 
        transform 200ms, background-color 200ms ;

    &.on{
        height: 85%;
        border-color: #213866;
        transform: translateX(calc( -1 * ${width} * 0.92 / 2)) rotate(-45deg);
   }
`;

const Line3 = styled.canvas`

    height: 90%;
    border: calc(${width} / 100) solid #8EABE6;
    position: absolute;    
    transform: rotate(90deg) translateX(calc(${width} / 2)) translateY(calc(-1 * ${height} / 2));
    top: 0px;
    left: 0px;

    &.on{
        border: none;
    }
`;

const Line4 = styled.canvas`

    height: 90%;
    border: calc(${width} / 100) solid #8EABE6;
    position: absolute;    
    transform: rotate(90deg) translateX(calc(-1 * ${width} / 2)) translateY(calc(-1 * ${height} / 2));
    bottom: 0px;
    left: 0px;

    &.on{
        border: none;
    }
`;

function TickButton() {
  const [theme, setTheme] = useState('light');
  const [on, setOn] = useState('');

  function handle(){

    theme === 'light' ? setTheme('dark') : setTheme('light');
    on === '' ? setOn('on') : setOn('');
    
  };
  

  return (
    <Button >
        <LineLeft />
        <Line2 />
        <Line3 />
        <Line4 />
    </ Button>  
  );
}

export default TickButton