import data from './data.jsx'



const Design = () => {
  return (
    <div className='bg-[#F2F4F7] w-full px-[16px] py-[37px] md:px-[37px] md:py-[67px] lg:px-[250px]' >
        <div className='flex justify-between items-center'>
            <p className='text-[#1D2939] text-[16px] font-bold lg:text-[27px]'>Design Tools</p>
            <button className='text-[#1D2939] text-[14px] bg-white px-[12px] py-[8px] rounded-lg font-semibold'>View all</button>
        </div>
        {data?.map((content)=>(
            <div className='grid place-items-center mt-[27px]'key={content.id}>
            <div className='grid md:grid-cols-3 md:gap-6 cursor-pointer items-center lg:gap-20 bg-white rounded-xl'>
                <div className='p-[26px] lg:p-[20px] col-span-2'>
                    <p className='text-[#667085] text-[12px] mb-[20px]'>{content.Date} </p>
                    <h1 className='text-[#1D2939] md:text-[22px] lg:text-[27px] xl:w-[500px] text-[17px] md:w-[390px]  font-semibold '>{content.Title}</h1>
                    <p className='hidden md:block md:text-[16px] md:mt-[10px] md:w-[390px] xl:w-[500px] '>{content.Content}</p>
                </div>
                <div className='w-full h-[180px] bg-cover md:bg-none md:pr-[26px] flex items-center'>
                    <img className='md:block' src= {content.Image} alt=''/>
                </div>
            </div>
        </div> 
        ))}
        
    </div>
  )
}

export default Design
