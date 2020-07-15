import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import styled from 'styled-components'

const Nav = styled.nav`

    ul {
        display: flex;

    }

    div {

        &:not(:last-child) {
            margin-right: 30px;
        }
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
    transition: color .3s ease;
    color: white;

    &:hover {
        color: black;
    }
    
    &:not(:last-child) {
        margin-right: 15px;
    }
`

function Navigation() {

    const data = useStaticQuery(graphql`
    query MenuQuery {
        allWordpressWpApiMenusMenusItems {
            edges {
                node {
                    name
                        items {
                            title
                            object_slug
                            wordpress_id
                        }
                    }
                }
            }
        }
    `)

    return (
        <>
            <Nav>
                <ul>
                    { data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => {
                        return <StyledLink to={`/${item.object_slug}`} key={item.wordpress_id}> {item.title} </StyledLink>;
                    })}
                </ul>
            </Nav>
        </>
    )
    
}

export default Navigation
