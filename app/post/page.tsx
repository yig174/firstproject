import Link from "next/link"
import { Metadata } from "next"


const Blog = () => {
  return (
    <div>
        <Link href="/"><p className="mx-auto rounded-md bg-gray-300 text-gray-900 text-center text-lg md:text-xl lg:text-2xl p-4 h-auto mb-2">Home</p></Link>
        <Link href="/about"><p className="mx-auto rounded-md bg-gray-300 text-gray-900 text-center text-lg md:text-xl lg:text-2xl p-4 h-auto mb-2">About</p></Link>
        <div className="bg-blue-500 w-full p-4 mb-2 rounded-md">
            <h1 className="text-xl md:text-2xl lg:text-3xl text-gray-100 text-center">Post</h1>
        </div>
        <div className="border-gray-300 border-2 rounded-md text-lg md:text-xl lg:text-2xl p-4 h-full">
          <h2>Post page. Read other people post:</h2>
          <Link href="/post/826639165/lamine-yamal-unfollow-carvajal-after-el-clasico?category=soccerINsport&page=1"><p className="block">Lamine Yamal Unfollow Carvajal After El Clasico</p></Link>
          <Link href="/post/927120477/list-top-10-military-rank?category=otherINmilitary&page=1"><p className="block">List Top 10 Military Rank</p></Link>
          <Link href="/post/category"><p className="text-blue-500 text-lg md:text-xl lg:text-2xl bottom-0">Check out all posts category here!</p></Link>
        </div>
    </div>
  )
}

export default Blog