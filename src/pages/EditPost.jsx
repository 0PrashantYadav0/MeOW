import React, {useEffect, useState} from 'react'
import PostForm from '../components/post-form/PostForm';
import { useNavigate,  useParams } from 'react-router-dom';
import service from '../appwrite/service';

function EditPost() {
    const [post, setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            service.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])
  return post ? (
    <div className='p-8'>
            <PostForm post={post} />
    </div>
  ) : null
}

export default EditPost