import React from 'react';
import './assets/homepage.style.css';

const HomePage = () => {
  return (
    <div className='homepage'>
      <div className='directory-menu'>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>Hats</h1>
            <span className='subtitle'>Shop Now</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>Jackets</h1>
            <span className='subtitle'>Shop Now</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>Snickers</h1>
            <span className='subtitle'>Shop Now</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>Women</h1>
            <span className='subtitle'>Shop Now</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>Men</h1>
            <span className='subtitle'>Shop Now</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;