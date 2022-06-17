import React from 'react';
import styled from 'styled-components';

const Mask = styled.div`
    height: 130px;
    width: 130px;
    border-radius: 50%;
    background-color: whitesmoke;
    z-index: 1;
`;

const Image = styled.img`
    height: 100%;
`;

function CircleImg({ src }){
    return (
        <>
            <Mask >
                <Image src={src} />
            </ Mask>
        </>
    );
}

export default CircleImg;