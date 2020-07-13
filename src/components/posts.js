import React from 'react'
import { useStaticQuery } from 'gatsby'

import styled from 'styled-components'
import Wrap from './wrap'

const PostsWrapper = styled.div`
    padding: 50px 0;
    background: green;

    ul {
        list-style-type: none;
        margin: -20px;
    }

    li {
        width: 33%;
        margin: 20px;
    }

    div {
        padding: 15px;
        background: red;
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
