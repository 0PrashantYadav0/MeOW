import React, {useState, useEffect} from 'react'
import PostCard from '../components/PostCard'
import service  from '../appwrite/service'


function AllPosts() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
        service.getPost([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
  })}, [])
  return (
        <div className='flex gap-4 p-4 max-md:block'>
          {posts.map((post) => (
              <div key={post.$id} className="w-full max-md:my-8">
                  <PostCard {...post} />
              </div>
          ))}
        </div>
  )
}

export default AllPosts
