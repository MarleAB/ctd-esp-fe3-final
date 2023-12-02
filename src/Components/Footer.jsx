import React from 'react'
import imgdh from "/images/DH.png"; 
import imgicoface from "/images/ico-facebook.png"; 
import imgicoins from "/images/ico-instagram.png"; 
import imgicotik from "/images/ico-tiktok.png"; 
import imgicowha from "/images/ico-whatsapp.png"; 

const Footer = () => {
  return (
    <footer className='footer'>
        <p>Powered by</p>
        <img src={imgdh} alt='DH-logo' />
{/* {        <div className='ft-social'>
        <ul className="ft-social-list">
        <li><img src={imgicoface} alt='facebook-logo'/></li>
        <li><img src={imgicoins} alt='instagram-logo' /></li>
        <li><img src={imgicotik} alt='tikok-logo'/></li>
        <li><img src={imgicowha} alt='whasapp-logo'/></li>}
        </ul>
        </div> */}
    </footer>
  )
}

export default Footer
