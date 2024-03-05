import React, { useState, useEffect } from 'react'
import appwriteService from '../appwrite/conf.js'
import { Container, PostCard } from '../components'

function AllPost() {
    const [posts, setPosts] = useState([])
    useEffect(() => {}, [])
    appwriteService.getPosts([]).then((posts) => {
        if(posts) {
            setPosts(posts.documents)
        }
    })
  return (
    <div className='w-full py-8'>
        <Container>
            <div></div>
        </Container>
    </div>
  )
}

export default AllPost
