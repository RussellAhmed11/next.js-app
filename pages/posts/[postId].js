import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'

const PostDetails = ({post}) => {
    const route=useRouter();
    const handleBack=()=>{
        route.push("/posts")
    }
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
    
    <div className="card-body">
      <h2 className="card-title">{post?.title}</h2>
      <p>{post?.body}</p>
      <div className="card-actions justify-end">
      <button onClick={handleBack} className="btn btn-primary">Back to posts</button> 
      </div>
    </div>
  </div>
  )
}


export const getStaticProps=async(context)=>{
    const {params}=context;
    const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.postId}`);
    const data=await res.json();
    return {
        props:{
            post:data
        }   
    }
}
 export const getStaticPaths=async()=>{
    const res=await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts=await res.json();
    const paths=posts.map(post=>{
        return {
            params:{
                postId:`${post.id}`
            }
        }
    })
     return{
            paths,
           fallback: false
        }
}
export default PostDetails