import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (

        <nav className='nav'>

            <ul style={{ display: "flex", justifyContent: "space-evenly", background: "gray", position: "fixed", top: "-16px", zIndex: "1", width: "100%", height: "40px" }}>
                <li style={{ padding: "5px", listStyleType: "none", color: "white" }}><Link to="/" style={{
                    color: "white",
                    textDecoration: "none",
                    fontWeight: "bold"
                }} >Home</Link></li>
                <li style={{ padding: "5px", listStyleType: "none" }}><Link to="/table" style={{
                    color: "white",
                    textDecoration: "none",
                    fontWeight: "bold"
                }}>Table</Link></li>
            </ul>
        </nav>


    )
}

export default Navbar
