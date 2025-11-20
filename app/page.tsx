import Link from "next/link"

const Home = () => {
  return (
    <div>
      <div className="bg-blue-500 w-full p-4 mb-2 rounded-md">
        <h1 className="text-xl md:text-2xl lg:text-3xl text-gray-100 text-center">Home</h1>
      </div>
      <Link href="/about"><p className="mx-auto rounded-md bg-gray-300 text-gray-900 text-center text-lg md:text-xl lg:text-2xl p-4 h-auto mb-2">About</p></Link>
      <Link href="/post"><p className="mx-auto rounded-md bg-gray-300 text-gray-900 text-center text-lg md:text-xl lg:text-2xl p-4 h-auto mb-2">Post</p></Link>
      <div className="border-gray-300 border-2 rounded-md text-lg md:text-xl lg:text-2xl p-4">
        <h2>Welcome Back!</h2>
      </div>
    </div>
  )
}

export default Home
