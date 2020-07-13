import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    max-width: 1140px;
    margin: 0 auto;
`

function Wrap({children}) {
    return (
        <>
            <Wrapper>
                {children}
            </Wrapper>
        </>
    )
}

export default Wrap
