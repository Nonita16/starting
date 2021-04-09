import React from 'react'

const Layout = () => {
    return (
        <div className="Main">
            <Header/>
                {children}
            <Footer/>
        </div>
    )
}

export default Layout;