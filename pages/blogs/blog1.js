import Head from 'next/head'
import React from 'react'
import Image from 'next/image'

const blog1 = () => {
    <Head>
        <title>blog1</title>
    </Head>
  return (
    <>
    <h1>This is blog1 page</h1>
    <Image src="/nature.jpg" width={400} height={400}></Image>
    </> 
  )
}

export default blog1
