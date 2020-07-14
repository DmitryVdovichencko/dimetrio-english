import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
const NAVIGATION = [
    { to: '/', label: 'Home' },
    { to: '/articles', label: 'Articles' },
    { to: '/dictionary', label: 'Dictionary' },
    { to: '/grammar', label: 'Grammar' },
    { to: '/training', label: 'Training' },
    { to: '/about', label: 'About' },
];
const NavStyle = styled.nav`
    display:flex;
    flex-flow: column nowrap;
    justify-content:center;
    align-items:center;
    ul{
        list-style:none;
        display:flex;
        flex-flow: row wrap;
        justify-content:center;
        align-items:center;
    }
`;
const LinkStyle = styled.li`
    padding:10px;
    margin:5px;
    font-family:Patua One;
    border-radius:2px;
    background-color:${props => props.current ? "rgb(239,239,239)" : "none"};
    &:hover{
        background-color:rgb(239,239,239);
    }
    a{
        color:#333;
        text-decoration:none;
        font-size:1.2em;
    }
`;

const Nav = ({location}) => {
    console.log(location)
    return (
        <NavStyle>
            <ul>
                {NAVIGATION.map(navigation => (
                    <LinkStyle current={location.pathname === navigation.to} key={navigation.label}>
                        <Link to={navigation.to}>{navigation.label}</Link>
                    </LinkStyle>
                ))}
            </ul>
        </NavStyle>


    )
}

export default Nav