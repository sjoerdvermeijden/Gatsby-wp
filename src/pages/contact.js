import React from 'react'

import styled from 'styled-components'

import Layout from '../components/layout'
import Wrap from '../components/wrap'

const ContactBlock = styled.div`
    padding: 70px 0;
    background: #f5f5f5;

    p {
        color: black;
    }
`

function Contact() {
    return (
        <>
            <Layout>
                <ContactBlock>
                    <Wrap>
                        <p>Lorem ipsum</p>
                    </Wrap>
                </ContactBlock>
            </Layout>
        </>
    )
}

export default Contact
