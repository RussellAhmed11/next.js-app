import Link from 'next/link'
import React from 'react'

const Post = ({post}) => {
  return (
    <div className="card mx-5 my-5 w-100 bg-base-100 shadow-xl m-5">
  
  <div className="card-body">
    <h2 className="card-title">{post.title}</h2>
    <div className="card-actions justify-end">
    <Link href={`posts/${post.id}`}>
        <button className="btn btn-primary">see Details</button>
    </Link>
    </div>
  </div>
</div>
  )
}

export default Post