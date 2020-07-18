import React, { Fragment } from 'react';
import styled from 'styled-components';
import PatuaOne from 'typeface-roboto';
const TagStyle = styled.div`
    padding:5px 10px;
    margin:0px 10px;
    border-radius:15px;
    font-size:0.9em;
    font-family:'Roboto';
    background-color:#a5f9ff;
    &:hover{
        background-color:#2196f3;
        .tag__link{
  
        color:white;
 
    }
    }
    .tag__link{
        text-decoration:none;
        color:#0069c0;
 
    }
    `;
const Tag = (props) => {
    return(
        <TagStyle>
            <a className='tag__link'href={`categories/${props.category}`}>
                {props.category}
            </a>
        </TagStyle>
    )
}

export default Tag