import React from 'react'
import { Link } from 'react-router-dom'
import service from "../appwrite/service";

function PostCard({$id, featuredImage, title}) {
  return (
    
    <Link to={`/post/${$id}`}>
        <div className='bg-[#4776a6] rounded-xl p-4 max-w-96 min-w-64 h-[100%] gap-4'>
            <div className='w-full'>
                <img src={service.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl w-full' />
            </div>
            <p
            className='text-xl font-bold py-2'
            >{title}</p>
            <p className='text-black'>Read full article</p>
        </div>
    </Link>
  )
}

export default PostCard
