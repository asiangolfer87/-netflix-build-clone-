import React from 'react'
import './Nav.css';

function Nav() {
  return (
    <div className='nav nav_black'>
       <div className='nav_contents'>
       <img 
      className='nav_logo'
      src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' 
      alt=''
      />

      <img 
      className='nav_avatar'
      src='https://external-preview.redd.it/nj1LJGpHx7g_xz8VUhHWx0UgAZ2jVtyRoMDXJ7c7m2g.gif?format=png8&s=3c378f3cf1a9590dda0b3b3ddbf75647f9ec2987' 
      alt=''
      />
       </div>
    </div>
  );
}

export default Nav;
