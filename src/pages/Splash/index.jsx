import React from 'react'
import Logo from '../../components/logo'
import './splash.css'

function Splash() {
  return (
    <div className='logo--container'>
        <div style={{position:'relative'}}>
          <Logo width={57.5} />
          <Logo width={59.5} fill='#001815' style={{position:'absolute', top:0, left:0, zIindex:'-1'}}/>
        </div>
        
        <p className='project--name'>Chatbox</p>
    </div>
  )
}

export default Splash