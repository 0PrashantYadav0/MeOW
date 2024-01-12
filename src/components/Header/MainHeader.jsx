import React from 'react'

function MainHeader() {
  return (
    <div className='bg-custom m-20 p-12 text-white shadow-2xl max-md:m-8'>
      <div className='flex justify-between items-start max-md:flex-wrap'>
        <div>
          <div className='bg-bar w-20 rounded-lg h-1'/>
          <h1 className='py-1'>What is MeOW</h1>
        </div>
        <p className='text-[#81afdd] text-start w-[60%] py-1 max-md:w-full px-2'>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
      </div>
      <div className='flex justify-between items-center py-12 max-md:flex-wrap'>
        <p className='bg-text text-5xl font-semibold w-1/2 max-md:w-full py-6'>
        The possibilities are beyond your imagination
        </p>
        <p className='bg-text text-2xl font-normal'>
        Explore the Library
        </p>
      </div>
      <div>
      <div className='flex gap-4 max-md:flex-wrap'>
        <div className=''>
          <div className='bg-bar w-20 rounded-lg h-1'/>
          <p className='font-bold py-1'>Post System</p>
          <p className='text-[#81afdd] text-start py-1'>We so opinion friends me message as delight. Whole front do of plate heard oh ought.</p>
        </div>
        <div className=''>
          <div className='bg-bar w-20 rounded-lg h-1'/>
          <p className='font-bold py-1'>Knowledgebase</p>
          <p className='text-[#81afdd] text-start py-1'>We so opinion friends me message as delight. Whole front do of plate heard oh ought.</p>
        </div>
        <div className=''>
          <div className='bg-bar w-20 rounded-lg h-1'/>
          <p className='font-bold py-1'>Education</p>
          <p className='text-[#81afdd] text-start py-1'>We so opinion friends me message as delight. Whole front do of plate heard oh ought.</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default MainHeader
