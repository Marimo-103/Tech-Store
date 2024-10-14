import React from 'react'
import Container from './Container'
import { HiChevronDown } from 'react-icons/hi'
import Logo from '../Layers/Logo'
import { IoLogoFacebook } from 'react-icons/io'
import { RiInstagramFill } from 'react-icons/ri'

const Header = () => {
  return (
    <div className='bg-[#020202] '>
      <Container className='py-3 flex justify-between relative'>
        <Logo className='lg:hidden absolute top-[7px] left-3 md:left-0' />
        <div className="workTime flex items-center gap-1 md:ml-[90px] ml-[81px] lg:ml-0">
          <p className='lg:text-xs text-[11px] text-white font-semibold'>
            <span className='text-[#A2A6B0]'>Mon-Thu:</span> 9:00 AM - 5:30 PM
          </p>
          <HiChevronDown className='text-white' />
        </div>
        <p className='lg:text-xs text-[11px] text-white font-semibold'>
          <span className='text-[#A2A6B0] lg:inline-block hidden mr-1'>Visit our showroom in 1234 Street Adress City Address, 1234</span> <span className='relative after:content-[""] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:rounded-full after:z-20 after:w-[105%] lg:after:h-[2px] after:h-[1.2px] after:bg-[#FFF]'>Contact Us</span>
        </p>
        <div className="hidden lg:flex items-center gap-4">
          <p className='text-xs text-white font-semibold'>
            Call Us: (00) 1234 5678
          </p>
          <div className="icons flex items-center gap-2 text-white text-lg">
            <IoLogoFacebook />
            <RiInstagramFill />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Header