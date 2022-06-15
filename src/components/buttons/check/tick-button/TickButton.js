import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components';

const height = '30px'  

const turnOn = keyframes`
    to{
        border-radius: 0%;
        width: calc(${height} / 2);
        transform: rotate(45deg);
        margin-left: calc(${height} * 0.32);
        border-color: transparent green green transparent;
    }
`;

const CheckBox = styled.canvas`
    height: ${height};
    width: ${height};
    border-radius: 10%;
    border: 3px solid gray;

    cursor: pointer;

    &.on{
        animation: ${turnOn} 0.5s forwards;
    }
`;

function TickButton() {
  const [on, setOn] = useState('');

  function handle(){
    on === '' ? setOn('on') : setOn('');
    
  };
  

  return (
    <CheckBox className={on} onClick={() => handle()}/>
  );
}

export default TickButton