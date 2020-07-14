import React, { Fragment } from 'react';
import styled from 'styled-components';

const PostPerviewStyle = styled.div`
    max-width:550px;
    padding:10px;
    border-radius:2px;
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
    `;

const PostPerview = (props) => {
    return(
        <PostPerviewStyle>
            <a href={props.slug}>
                <h4>{props.title}</h4>
                <p>{props.excerpt}</p>
            </a>
        </PostPerviewStyle>
    )
}

export default PostPerview