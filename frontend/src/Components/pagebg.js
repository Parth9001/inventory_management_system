import React from 'react'
import Sidebar from './sidebar'

export default function Pagebg(){
    return(
            <div className='pagebg'>
                <div className="bgpage" style={{zIndex: 2, height:'8.5%'}}>
                        <h1 className='logo'>LOGO</h1>
                </div>
                 <Sidebar/>
            </div>


    );
}