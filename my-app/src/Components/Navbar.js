import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// import { a } from 'react-router-dom'

export default function Navbar(props) {
    let myStyle = {
        color: 'white'
    }
    let styles = {
        backgroundColor: '#541212',
        color: 'white',
        borderColor: '#541212'
    }
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className={`navbar-brand text-${props.mode === 'light' ? 'dark' : 'light'}`} to="/" style={myStyle}>{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item" >
                            <Link className={`nav-a active text-${props.mode === 'light' ? 'dark' : 'light'}`} style={myStyle} aria-current="page" to="/">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className={`nav-a active text-${props.mode === 'light' ? 'dark' : 'light'} mx-2`} to="/about" style={myStyle}>About</Link>
                        </li>
                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-primary" type="submit">Search</button>
                    </form> */}
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input mx-1" onClick={props.redMode} style={styles} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">DarkRed</label>
                    </div>
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input mx-1" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    Heading: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}
// Navbar.defaultProps = {
//     title: 'Set Title Here',
//     aboutText: 'Set about here'
// };