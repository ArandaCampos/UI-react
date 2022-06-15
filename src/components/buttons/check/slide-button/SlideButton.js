import React, { useState } from 'react'
import styled from 'styled-components';

const Button = styled.button`
  width: 70px;
  height: 30px;
  border-radius: 30px;
  border: none;

  background-color: #ADE3FB;

  display: flex;
  align-items: center;

  cursor: pointer;


  &::before{
    content: "";

    width: 20px;
    height: 20px;
    border-radius: 20px;
    border: none;

    background-color: #546F7A;

    transition: 
        width 200ms, height 200ms, 
        transform 200ms, background-color 200ms ;
  }

  &.on{
    background-color: #546F7A;
  }

  &.on::before{
    background-color: #ADE3FB;
    transform: translateX(40px)
  }
`;

function SlideButton() {
  const [theme, setTheme] = useState('light');
  const [on, setOn] = useState('');

  function handle(){

    theme === 'light' ? setTheme('dark') : setTheme('light');
    on === '' ? setOn('on') : setOn('');
    
  };
  

  return (
    <div className="App">
      <Button className={on} role="switch" onClick={() => handle()} aria-checked="false"/>    
    </div>  
  );
}

export default SlideButton