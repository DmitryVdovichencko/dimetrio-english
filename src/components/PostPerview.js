import React, { Fragment } from 'react';
import styled from 'styled-components';
import PatuaOne from 'typeface-roboto';
import Tag from './Tag'
const PostPerviewStyle = styled.div`
    max-width:550px;
    padding:10px;
    border-radius:2px;
    font-family:'Roboto';
    &:hover{
        background-color:rgb(239,239,239);
    }
    a{
        text-decoration:none;
        color:#333;
    }
    h4{
        font-weight:normal
    }
    p{
        font-size:0.9em;
        line-height:1.5em;
        color:#333;
    }
    `;
const PostInfoStyle = styled.div`
    display:flex;
    flex-flow:row nowrap;
    justify-content:space-between;
    align-items:center;
    padding:0;
    font-size:0.8em;
    .tags{
        display:flex;
        flex-flow:row nowrap;
    }
    
`;
const PostPerview = (props) => {
    return(
        <PostPerviewStyle>
            <a href={props.slug}>
                <h4>{props.title}</h4>
                <PostInfoStyle>
                <div>{props.date}</div>
                <div className='tags'>
                {props.categories.map((category,i) =>
                    <Tag key={category} category={category}></Tag> )}
                </div>
                </PostInfoStyle>
                <p>{props.excerpt}</p>
            </a>
        </PostPerviewStyle>
    )
}

export default PostPerview