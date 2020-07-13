import React from 'react'
import styled from 'styled-components'

import Wrap from './wrap'
import Navigation from './navigation'

const HeaderWrapper = styled.div`
	background: crimson;
	padding: 25px 0;
`

function Header() {
  	return (
    	<>
			<HeaderWrapper>
				<Wrap>
					<Navigation />
				</Wrap>
			</HeaderWrapper>
    	</>
  	)
}

export default Header
