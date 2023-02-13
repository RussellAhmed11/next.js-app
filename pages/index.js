import Head from "next/head";
import Link from "next/link";
import Image from "next/Image";

export default function Home() {
  return (
    <>
    <Head>
      <title>Home page</title>
    </Head>
      <h1>hello world</h1>
      <Link href="/blogs/blog1">blog1</Link>
      <Image src="/nature.jpg" width={400} height={400}></Image>
      
    </>
  )
}
