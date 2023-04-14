import logo from '../assets/logo.svg'

import {HiOutlineMenuAlt3} from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {AiOutlineClose} from 'react-icons/ai'
const Navigation = () => {
    const [open, setOpen] =useState(false)
    const clickHandler = () =>{
        setOpen(!open)
    }
  return (

    <div className="w-full fixed shadow-md shadow-[0px_4px_70px_rgba(30, 40, 52, 0.08)]" >
        <div className=' w-full z-20 px-[16px] lg:px-[69px] md:px-[37px] md:py-[32px] lg:py-[30px] py-[22px] bg-[#FFFFFF] flex items-center justify-between '>
            <div>
                <img src={logo} alt='logo'/>
            </div>
            <div className='md:hidden'onClick={clickHandler} >
                { !open ? <HiOutlineMenuAlt3 size={30}/> : <AiOutlineClose size={30} />  } 
            </div>
                <div className='hidden md:flex items-center'>
                    <ul className='flex lg:w-[318px] md:w-[318px] justify-between'>
                        <li className='text-[#1d2939] text-[16px]'><Link to='/digest'>Daily Digest</Link></li>
                        <li className='text-[#1d2939] text-[16px]'><Link to='/design'>Design Tools</Link></li>
                        <li className='text-[#1d2939] text-[16px]'><Link to='/tutorial'>Tutorials</Link></li>
                    </ul>
                    <button className='lg:ml-[100px] bg-[#1D2939] px-[14px] py-[12px] text-white rounded-xl md:hidden lg:block'>Subscribe</button>  
                </div>
        </div>
                <div>
                    <div className={open ? 'fixed top-[70px] -z-10 bg-[#FFFFFF] md:hidden px-[16px] pb-[15px] w-full ease-out duration-500  shadow-md shadow-[0px_4px_70px_rgba(30, 40, 52, 0.08)]' : 'fixed -top-[100%]'}>
                        <ul className='text-center'>
                            <li className='bg-gradient-to-r from-[#C41740] to-[#EA9C28] text-transparent bg-clip-text text-[18px] mt-[20px]'><Link to='/digest'>Daily Digest</Link></li>
                            <li className='bg-gradient-to-r from-[#C41740] to-[#EA9C28] text-transparent bg-clip-text text-[18px] mt-[20px]'><Link to='/design'>Design Tools</Link></li>
                            <li className='bg-gradient-to-r from-[#C41740] to-[#EA9C28] text-transparent bg-clip-text text-[18px] mt-[20px]'><Link to='/tutorial'>Tutorials</Link></li>
                        </ul>
                        <button className='lg:ml-[100px] bg-[#1D2939] px-[14px] w-full mt-[20px] py-[12px] text-white rounded-xl md:hidden lg:block'>Subscribe</button>  

                    </div>
                </div>
        

      
    </div>
  )
}

export default Navigation
