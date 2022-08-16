import React from 'react'
import '../CSS/socialIcons.css'
import { FaGithub, FaLinkedin, FaTwitter, FaFacebookF } from 'react-icons/fa';


function SocialIcons({SocialIconContainerClass, SocialIconClass}) {
  return (
    <div className={SocialIconContainerClass}>
      <FaGithub className={SocialIconClass} />
      <FaLinkedin className={SocialIconClass} />
      <FaTwitter className={SocialIconClass} />
      <FaFacebookF className={SocialIconClass} />
    </div>
  )
}

export default SocialIcons