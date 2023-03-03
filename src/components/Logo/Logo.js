import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css'
import brain from "./brain.png"

const Logo = ()=>{
    return(
        <div className='ma4' style={{maxWidth: '200px'}}>
            <Tilt className='Tilt' width='200px'>
                <div style={{ height: '200px', width:'200px', padding: '3px'}}>
                    <img style={{paddingTop: '5px', height: '200px'}} src={ brain } alt='brain-logo'></img>
                </div>
                </Tilt>
        </div>
    )
}

export default Logo;