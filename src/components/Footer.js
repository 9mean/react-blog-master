import React from 'react';
import './Footer.css';
function Footer() {
  return (
    <>
      <div className='footer'>
        <div>
          <h2>GumHouseClass...</h2>
          <br />
          is serving today's your food to you!
        </div>
        <div className='fb'>
          <a
            target='_blank'
            href='https://www.facebook.com/profile.php?id=100012401267221'
          >
            <img src={require('../img/페북.png')} width={20} />
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
