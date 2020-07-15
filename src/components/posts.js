import React from 'react'
import { useStaticQuery } from 'gatsby'

import styled from 'styled-components'
import Wrap from './wrap'

const PostsWrapper = styled.div`
    padding: 50px 0;
    background: #f5f5f5;

    ul {
        list-style-type: none;
        margin: -20px;
        display: flex;
    }

    li {
        padding: 20px;
        width: 33%;

        div {
            padding: 25px;
            background: crimson;
            box-shadow: 5px 5px 8px 0px rgba(153,153,153,1);
        }
    }
`


function Posts() {

    const data = useStaticQuery(graphql`
        query PostQuery {
            allWordpressPost {
                edges {
                    node {
                        id
                        title
                        content
                        link
                    }
                }
            }
        }
    `)

    return (
        <>
            <PostsWrapper>
                <Wrap>
                    <ul>
                        {data.allWordpressPost.edges.map(({ node }) => (
                            <li key={node.id}>
                                <div>{node.title}</div>
                            </li>
                        ))}
                    </ul>
                </Wrap>
            </PostsWrapper>
        </>
    )
}

export default Posts
