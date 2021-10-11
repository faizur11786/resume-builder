import React from 'react'
import Header from './Header'
import Footer from './Footer'


const Layout = ( { children } ) => {
    return (
        <>
            <div className="wrapper">
                <Header />
                <hr />
                <section className="section">
                    {children}
                </section>

                <Footer />
            </div>
        </>
    )
}

export default Layout
