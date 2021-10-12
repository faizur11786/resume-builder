import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-light px-0 my-3">
                <Link className="navbar-brand" to="/">Resume Builder</Link>
            </nav>
        </div>
    )
}

export default Header
