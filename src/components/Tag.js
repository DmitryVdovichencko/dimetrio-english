import React, { Fragment } from 'react';
import styled from 'styled-components';
import PatuaOne from 'typeface-roboto';
const TagStyle = styled.div`
    padding:5px 10px;
    margin:0px 10px;
    
    font-family:'Roboto';
    .tag__link{
        text-decoration:none;
        color:#0069c0;
        text-transform:'uppercase';
 
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