import React, {useState, useEffect} from 'react'
import PostCard from '../components/PostCard'
import service  from '../appwrite/service'
import { useSelector } from 'react-redux'


function AllPosts() {
  
  const [posts, setPosts] = useState([])
  useEffect(() => {
        service.getPost([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
  })}, [])
  
  return (
        <div className='flex flex-wrap p-6'>
          {posts.slice(0).reverse().map((post) => (
              <div key={post.$id} className="p-6 w-1/4 max-2xl:w-1/3 max-lg:w-1/2 max-sm:w-full">
                  <PostCard {...post} />
              </div>
          ))}
        </div>
  )
}

export default AllPosts
