import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'

import Wrap from './wrap'

const ProjectWrapper = styled.div`
    padding: 50px 0;

    ul {
        list-style-type: none;
        display: flex;
        margin: -20px;

        li {
            padding: 20px;
            width: 33%;
        }

        .project-container {
            padding: 25px;
            background: #f5f5f5;
            box-shadow: 5px 5px 8px 0px rgba(153,153,153,1);
            text-decoration: none;
        }

        h3 {
            color: black;

            &:not(:last-child) {
                margin-bottom: 15px;
            }

        }

    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
`;

function Projects() {

    const data = useStaticQuery(graphql`
    query MyQuery {
        allWordpressWpProject {
            edges {
                node {
                    content
                    title
                    id
                    }
                }
            }
        }      
    `)

    
    return (
        <>
            <ProjectWrapper>
                <Wrap>
                    <ul>
                        {data.allWordpressWpProject.edges.map(({ node }) => (
                            <li key={node.id}>
                                <StyledLink to="" >
                                    <div className="project-container">
                                        <h3>{node.title}</h3>
                                        <div dangerouslySetInnerHTML={{ __html: node.content }} />
                                    </div>
                                </StyledLink>
                            </li>
                        ))}
                    </ul>
                </Wrap>
            </ProjectWrapper>
        </>
    )
}

export default Projects
