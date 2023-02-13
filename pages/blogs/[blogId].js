import { useRouter } from 'next/router'
import React from 'react'

const blogId= () => {
    const route=useRouter()
    const id=route.query.blogId
  return (
    <div>this is dynamic page {id}</div>
  )
}

export default blogId