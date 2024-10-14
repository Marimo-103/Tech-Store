import React from 'react'
import Header from './Header'
import Container from './Container'
import Logo from '../Layers/Logo'
import { Link } from 'react-router-dom'
import Button from '../Layers/Button'
import { IoMenu, IoSearch } from 'react-icons/io5'
import { FaAngleDown, FaRegUser } from 'react-icons/fa'

const Search = () => {
  return (
    <div>
      <IoSearch className='text-black text-xl' />
    </div>
  )
}

const Cart = () => {
  return (
    <div>
      <div className="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
          <path d="M14.5834 20.8334C15.1359 20.8334 15.6658 20.6139 16.0566 20.2232C16.4473 19.8325 16.6667 19.3026 16.6667 18.75C16.6667 18.1975 16.4473 17.6676 16.0566 17.2769C15.6658 16.8862 15.1359 16.6667 14.5834 16.6667C14.0309 16.6667 13.501 16.8862 13.1103 17.2769C12.7196 17.6676 12.5001 18.1975 12.5001 18.75C12.5001 19.3026 12.7196 19.8325 13.1103 20.2232C13.501 20.6139 14.0309 20.8334 14.5834 20.8334ZM7.29174 20.8334C7.84428 20.8334 8.37418 20.6139 8.76488 20.2232C9.15558 19.8325 9.37508 19.3026 9.37508 18.75C9.37508 18.1975 9.15558 17.6676 8.76488 17.2769C8.37418 16.8862 7.84428 16.6667 7.29174 16.6667C6.73921 16.6667 6.20931 16.8862 5.81861 17.2769C5.4279 17.6676 5.20841 18.1975 5.20841 18.75C5.20841 19.3026 5.4279 19.8325 5.81861 20.2232C6.20931 20.6139 6.73921 20.8334 7.29174 20.8334ZM20.873 6.16981C21.133 6.16142 21.3796 6.05223 21.5606 5.86531C21.7416 5.6784 21.8428 5.42842 21.8428 5.16825C21.8428 4.90807 21.7416 4.6581 21.5606 4.47118C21.3796 4.28427 21.133 4.17507 20.873 4.16669H19.674C18.7345 4.16669 17.922 4.81877 17.7178 5.73544L16.4126 11.6125C16.2084 12.5292 15.3959 13.1813 14.4563 13.1813H6.63133L5.12924 7.17085H14.8636C15.1212 7.1591 15.3644 7.0485 15.5425 6.86205C15.7206 6.67561 15.82 6.42767 15.82 6.16981C15.82 5.91195 15.7206 5.66401 15.5425 5.47757C15.3644 5.29113 15.1212 5.18052 14.8636 5.16877H5.12924C4.82473 5.16868 4.5242 5.23802 4.25051 5.37151C3.97682 5.50501 3.73716 5.69915 3.54976 5.93917C3.36236 6.17919 3.23215 6.45878 3.16903 6.75668C3.10591 7.05458 3.11154 7.36295 3.1855 7.65835L4.68758 13.6667C4.79586 14.1002 5.046 14.4851 5.39821 14.7601C5.75042 15.0351 6.18447 15.1845 6.63133 15.1844H14.4563C15.368 15.1845 16.2524 14.8737 16.9636 14.3032C17.6748 13.7328 18.1701 12.9369 18.3678 12.0469L19.674 6.16981H20.873Z" fill="black" />
        </svg>
      </div>
    </div>
  )
}

const User = () => {
  return (
    <div className='h-9 w-9 rounded-full border-2 border-white flex items-center justify-center'>
      <FaRegUser className='text-white text-xl' />
    </div>
  )
}

const Navbar = () => {

  let navbarListItem = ['Laptops', 'Desktop PCs', 'Networking Devices', 'Printers & Scanners', 'PC Parts', 'All Other Products', 'Repairs']

  return (
    <div className='bg-[#0156FF] lg:bg-transparent'>
      <Header />
      <Container className='relative z-40 lg:py-3 py-[13px]'>
        <div className="main flex items-center">
          <Logo className='hidden lg:block mr-[30px]' />
          <ul className='lg:static absolute top-0 left-0 bg-white lg:bg-transparent lg:h-auto lg:w-auto w-full h-dvh lg:flex lg:flex-row flex-col items-center gap-[25px] border-red-800 border-2'>
            <div className="line lg:hidden h-[1px] w-[89%] md:w-[94%] bg-[#CACDD8] mt-[6px] mb-3 mx-auto"></div>
            {
              navbarListItem.map((item, index) => (
                <li key={index} className='flex items-center justify-between lg:px-0 px-6 w-[300px] md:w-[436px] lg:w-auto duration-300 hover:bg-[#F5F7FF] lg:hover:bg-transparent'>
                  <Link className='navbarListItem'>
                    {item}
                  </Link>
                  <FaAngleDown className='block lg:hidden -rotate-90'/>
                </li>
              ))
            }
            <Button className='lg:px-[26px] px-[50px]'>
              Our Deals
            </Button>
          </ul>
          <button className='lg:hidden text-white text-[26px]'>
            <IoMenu />
          </button>
          <div className="cart&search ml-auto flex items-center gap-[25px] mr-9">
            <Search />
            <Cart />
          </div>
          <User />
        </div>
      </Container>
    </div>
  )
}

export default Navbar