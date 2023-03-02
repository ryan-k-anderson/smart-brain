import React from 'react';
import Tilt from 'react-parallax-tilt';

const Logo = ()=>{
    return(
        <div className='ma4' style={{maxWidth: '300px'}}>
            <Tilt width='300px'>
                <div style={{ height: '300px', width:'300px', backgroundColor: 'darkgreen' }}>
                    <h1>React Parallax Tilt 👀</h1>
                </div>
                </Tilt>
        </div>
    )
}

export default Logo;