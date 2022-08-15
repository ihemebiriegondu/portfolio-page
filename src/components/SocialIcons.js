import React from 'react'
import '../CSS/socialIcons.css'
import { FaGithub, FaLinkedin, FaTwitter, FaFacebookF } from 'react-icons/fa';


function SocialIcons({SocialIconContainerClass}) {
  return (
    <div className={SocialIconContainerClass}>
      <FaGithub className='socialIconsHome' />
      <FaLinkedin className='socialIconsHome' />
      <FaTwitter className='socialIconsHome' />
      <FaFacebookF className='socialIconsHome' />
    </div>
  )
}

export default SocialIcons