import React from 'react'
import { useState } from 'react'


export const Footer = () => {

    const [clicks, setclicks] = useState(0);

    const year = new Date().getFullYear();

    const companyName = "Egg Education";

    const handleClick = () => {
        setclicks(clicks + 1);
    }

    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <span className='etiqueta' onClick={handleClick}>
                    <img className='App-Logo' height={52} alt='Logo ninja' src='logoninja.png' />
                </span>
                <p className="col-md-4 mb-0 text-muted">© {year} {companyName} Clicks = {clicks}</p>
                <ul className="nav col-md-4 justify-content-end">
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Features</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Pricing</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>
                </ul>
            </footer>
        </div>
    )
}

export default Footer
