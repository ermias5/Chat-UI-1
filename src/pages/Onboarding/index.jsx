import React from 'react'
import './styles.css'
import Logo from '../../components/logo'

function Onboarding() {
  return (
    <div className='page background' >
      <div className="gradient--background"></div>
      <div className="title">
        <Logo width={16} fill='white' style={{height:"fit-content"}}/>
        <p>Chatbox</p>
      </div>
      <p className="hero--text">Connect friends <span>easily & quickly</span></p>
      <p className="hero--desc">Our chat app is the perfect way to stay connected with friends and family.</p>
      <div className="social--buttons">
        <button>
          <img src="src/assets/Facebook.svg" alt="" />
        </button>
        <button>
          <img src="src/assets/Google.svg" alt="" />
        </button>
        <button>
          <img src="src/assets/Apple.svg" alt="" />
        </button>
      </div>
    </div>
  )
}

export default Onboarding