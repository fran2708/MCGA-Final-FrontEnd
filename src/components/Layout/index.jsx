import React from 'react'

import Header from '../Header'
import Footer from '../Footer'

function index ({ children }) {
    return (
        <div>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default index