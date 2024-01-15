import React from 'react'

function MainHeader() {
  return (
    <div className='bg-custom m-20 p-12 text-white shadow-2xl max-md:m-8'>
      <div className='flex justify-between items-start max-md:flex-wrap'>
        <div>
          <div className='bg-bar w-20 rounded-lg h-1'/>
          <h1 className='py-1'>What is MeOW</h1>
        </div>
        <p className='text-[#81afdd] text-start w-[60%] py-1 max-md:w-full px-2'>MeOW: Unleash Your Story! MeOW is not just a blog; it's a canvas for your experiences. Whether it's a triumph, a quirky adventure, or a reflective thought, MeOW is your space to express it. Join us in creating a tapestry of diverse narratives, each contributing to the unique melody of MeOW. 🐾 #MeOWStories</p>
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
          <p className='text-[#81afdd] text-start py-1'>A post system facilitates seamless content creation on websites, allowing users to easily add topics, integrate visuals, and share concise posts under specific word limits for a dynamic and engaging online experience.</p>
        </div>
        <div className=''>
          <div className='bg-bar w-20 rounded-lg h-1'/>
          <p className='font-bold py-1'>Knowledgebase</p>
          <p className='text-[#81afdd] text-start py-1'>A knowledgebase is a centralized repository of information, offering quick access to organized data, FAQs, and resources, enhancing efficiency in information retrieval and problem-solving for users.</p>
        </div>
        <div className=''>
          <div className='bg-bar w-20 rounded-lg h-1'/>
          <p className='font-bold py-1'>Education</p>
          <p className='text-[#81afdd] text-start py-1'>Education is a lifelong journey of acquiring knowledge and skills, empowering individuals to grow intellectually and contribute meaningfully to society. It opens doors to opportunities, fostering personal development and societal progress.</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default MainHeader
