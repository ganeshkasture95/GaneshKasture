import React from 'react'
import { AiFillDribbbleCircle } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/ganesh-kasture-b9008a255/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/ganeshkasture95" target='_blank'><FaGithub/></a>
        <a href="Https://dribble.com" target='_blank'><AiFillDribbbleCircle/></a>
    </div>
  )
}

export default HeaderSocials