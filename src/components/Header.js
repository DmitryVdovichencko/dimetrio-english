import React, { Fragment } from 'react';
import styled from 'styled-components';

const HeaderStyle = styled.header`
    background-color:#2196f3;
    color:white;
    margin:0;
    padding:10px 0px;
    display:flex;
    flex-flow:column nowrap;
    justify-content:center;
    align-items:center;
    box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 
    0px 4px 5px 0px rgba(0,0,0,0.14), 
    0px 1px 10px 0px rgba(0,0,0,0.12);
    h2{
        margin:0;
        font-weight:normal;
    }

`;

const Header = (props) => {
    const { title } = props.site.siteMetadata
    return(
        <HeaderStyle>
            <h2>{title}</h2>
        </HeaderStyle>
    )
}

export default Header
