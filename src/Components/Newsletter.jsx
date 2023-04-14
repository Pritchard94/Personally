import React from 'react'

const Newsletter = () => {
  return (
    <div className='bg-white  w-full '>
        <div className='px-[40px] py-[16px] text-center grid place-items-center'>
            <h3 className='mb-[10px] bg-gradient-to-r from-[#C41740] to-[#EA9C28] text-transparent bg-clip-text text-[18px] md:[28px] font-semibold'>Personally Newsletter</h3>
            <p className='text-[#475467] text-[16px] w-[320px] md:w-[472px] md:text-[18px] leading-6 mb-[26px]'>A bi-weekly newsletter of design inspiration, resources and anything related to career development.</p>
        </div>
        <div className='px-[40px] grid place-items-center md:flex md:justify-center md:pb-[40px] md:w-full '>
            <input className=' border-[1px] border-[#D0D5DD] mb-[12px] w-full md:w-fit py-[13px] pl-[21px] text-[#D0D5DD] md:px-[15px] md-[34px] md:mb-[0px] rounded-xl md:rounded-r-sm md:border-r-0 md:text-[14px] md:h-[50px]'  type='email' placeholder='Email Address'/>
            <button className='bg-[#1D2939] px-[14px] py-[15px] mb-[40px] md:mb-[0px] text-white rounded-xl w-full md:w-fit md:px-[15px] md-[34px] md:rounded-l-sm md:text-[14px] md:h-[50px]'>Subscribe</button>  
        </div>
        
        <p className='text-center py-[20px] border-t-[1px] w-full border-[#adb3bb78] text-[12px]'>Copyright 2021 - Pritchard Feyisanumi</p>

      
    </div>
  )
}

export default Newsletter
