import React from 'react'

import Header from './header'
import Footer from './footer'

import GlobalStyle from './styled/GlobalStyles'

function Layout({children}) {
    return (
        <div>
            <GlobalStyle />
            <Header />
                {children}
            <Footer />
        </div>
    );
}

export default Layout
