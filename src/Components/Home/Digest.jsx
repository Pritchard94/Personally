import thumb from '/Users/bigmac/Desktop/Programming/Personally/personally/src/assets/thumbail1.svg'
const Digest = () => {
  return (
    <div className='bg-[#F2F4F7] w-full px-[16px] py-[37px] md:px-[37px] md:py-[67px] lg:px-[250px]' >
        <div className='flex justify-between items-center'>
            <p className='text-[#1D2939] text-[16px] font-bold lg:text-[27px]'>Daily Digest</p>
            <button className='text-[#1D2939] text-[14px] bg-white px-[12px] py-[8px] rounded-lg font-semibold'>View all</button>
        </div>
        <div className='grid place-items-center mt-[27px]'>
            <div className='grid md:grid-cols-3 md:gap-6 items-center lg:gap-20 bg-white rounded-xl'>
                <div className='p-[26px] lg:p-[20px] md:col-span-2'>
                    <p className='text-[#667085] text-[12px] mb-[20px]'>AUGUST 13, 2021 </p>
                    <h1 className='text-[#1D2939] md:text-[22px] lg:text-[27px] lg:w-[610px] text-[17px] md:w-[390px]  font-semibold '>10 Hilarious Cartoons That Depict Real-Life Problems of Programmers</h1>
                    <p className='hidden md:block md:text-[16px] md:mt-[10px] md:w-[390px] lg:w-[610px] '>Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.</p>
                </div>
                <div className='bg-[url("/Users/bigmac/Desktop/Programming/Personally/personally/src/assets/thumbail1.svg")] w-full h-[180px] bg-cover md:bg-none md:pr-[26px]'>
                    <img className='hidden md:block' src={thumb} alt=''/>
                </div>
                
            </div>

        </div>

      
    </div>
  )
}

export default Digest
