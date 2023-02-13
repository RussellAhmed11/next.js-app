import React from 'react'
import Post from '../Component/Post/Post'

const posts = ({posts}) => {
  return (
    <div>
        <h1>The number of posts is {posts.length}</h1>
        {
            posts.map(post=><Post post={post} key={post.index}></Post>)
        }
    </div>
  )
}

export default posts
export const getStaticProps=async()=>{
    const res=await fetch("https://jsonplaceholder.typicode.com/posts");
    const data=await res.json();
    return {
        props:{
            posts:data
        }   
    }
}