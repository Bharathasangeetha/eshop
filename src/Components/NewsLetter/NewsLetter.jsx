import React from 'react'
import './NewsLetter.css'
const NewsLLetter = () => {
  return (
    <div className='newsLetter'>
        <h1>Get Exclusive Offers On Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input type="email" placeholder='Enter your Email ID' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLLetter
