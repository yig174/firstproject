import Link from "next/link"

const BlogCategory = () => {
  return (
    <div>
        <div className="bg-blue-500 w-full p-4 mb-2 rounded-md">
            <h1 className="text-xl md:text-2xl lg:text-3xl text-gray-100 text-center">Posts Category</h1>
        </div>
        <div className="border-gray-300 border-2 rounded-md text-lg md:text-xl lg:text-2xl p-4 h-full">
            <Link href="/post/category/sport"><h2 className="text-lg md:text-xl lg:text-2xl">Sport:</h2></Link>
            <ul className="list-none m-0 mt-2 mb-2 p-0 w-50 bg-gray-100 rounded-md">
              <li><Link href="/post/category/sport/soccer"><p className="block text-gray-900 px-2 py-4 no-underline text-lg md:text-xl lg:text-2xl rounded-md hover:bg-gray-500 hover:text-gray-100">Soccer</p></Link></li>
              <li><p className="block text-gray-900 px-2 py-4 no-underline text-lg md:text-xl lg:text-2xl rounded-md hover:bg-gray-500 hover:text-gray-100">Basketball</p></li>
              <li><p className="block text-gray-900 px-2 py-4 no-underline text-lg md:text-xl lg:text-2xl rounded-md hover:bg-gray-500 hover:text-gray-100">Batminton</p></li>
              <li><p className="block text-gray-900 px-2 py-4 no-underline text-lg md:text-xl lg:text-2xl rounded-md hover:bg-gray-500 hover:text-gray-100">Volley</p></li>
              <li><p className="block text-gray-900 px-2 py-4 no-underline text-lg md:text-xl lg:text-2xl rounded-md hover:bg-gray-500 hover:text-gray-100">Tennis</p></li>
              <li><p className="block text-gray-900 px-2 py-4 no-underline text-lg md:text-xl lg:text-2xl rounded-md hover:bg-gray-500 hover:text-gray-100">Golf</p></li>
              <li><p className="block text-gray-900 px-2 py-4 no-underline text-lg md:text-xl lg:text-2xl rounded-md hover:bg-gray-500 hover:text-gray-100">Table Tennis</p></li>
              <li><p className="block text-gray-900 px-2 py-4 no-underline text-lg md:text-xl lg:text-2xl rounded-md hover:bg-gray-500 hover:text-gray-100">MotoGP</p></li>
              <li><p className="block text-gray-900 px-2 py-4 no-underline text-lg md:text-xl lg:text-2xl rounded-md hover:bg-gray-500 hover:text-gray-100">Formula 1</p></li>
              <li><p className="block text-gray-900 px-2 py-4 no-underline text-lg md:text-xl lg:text-2xl rounded-md hover:bg-gray-500 hover:text-gray-100">Other</p></li>
            </ul>
        </div>
        <div className="border-gray-300 border-2 rounded-md p-4 h-full">
            <h2 className="text-lg md:text-xl lg:text-2xl">Military:</h2>
            <ul className="list-none m-0 mt-2 mb-2 p-0 w-50 bg-gray-100 rounded-md">
              <li><p className="block text-gray-900 px-2 py-4 no-underline text-lg md:text-xl lg:text-2xl rounded-md hover:bg-gray-500 hover:text-gray-100">Army</p></li>
              <li><p className="block text-gray-900 px-2 py-4 no-underline text-lg md:text-xl lg:text-2xl rounded-md hover:bg-gray-500 hover:text-gray-100">Navy</p></li>
              <li><p className="block text-gray-900 px-2 py-4 no-underline text-lg md:text-xl lg:text-2xl rounded-md hover:bg-gray-500 hover:text-gray-100">Air Force</p></li>
              <li><p className="block text-gray-900 px-2 py-4 no-underline text-lg md:text-xl lg:text-2xl rounded-md hover:bg-gray-500 hover:text-gray-100">Other</p></li>
            </ul>
        </div>
        <div className="border-gray-300 border-2 rounded-md p-4 h-full">
            <h2 className="text-lg md:text-xl lg:text-2xl">Economy:</h2>
            <ul className="list-none m-0 mt-2 mb-2 p-0 w-50 bg-gray-100 rounded-md">
              <li><p className="block text-gray-900 px-2 py-4 no-underline text-lg md:text-xl lg:text-2xl rounded-md hover:bg-gray-500 hover:text-gray-100">Popularity</p></li>
              <li><p className="block text-gray-900 px-2 py-4 no-underline text-lg md:text-xl lg:text-2xl rounded-md hover:bg-gray-500 hover:text-gray-100">Food</p></li>
              <li><p className="block text-gray-900 px-2 py-4 no-underline text-lg md:text-xl lg:text-2xl rounded-md hover:bg-gray-500 hover:text-gray-100">Tax</p></li>
              <li><p className="block text-gray-900 px-2 py-4 no-underline text-lg md:text-xl lg:text-2xl rounded-md hover:bg-gray-500 hover:text-gray-100">Currency</p></li>
              <li><p className="block text-gray-900 px-2 py-4 no-underline text-lg md:text-xl lg:text-2xl rounded-md hover:bg-gray-500 hover:text-gray-100">Business</p></li>
              <li><p className="block text-gray-900 px-2 py-4 no-underline text-lg md:text-xl lg:text-2xl rounded-md hover:bg-gray-500 hover:text-gray-100">Other</p></li>
            </ul>
        </div>
        <div className="border-gray-300 border-2 rounded-md p-4 h-full">
            <h2 className="text-lg md:text-xl lg:text-2xl">Other</h2>
        </div>
    </div>
  )
}

export default BlogCategory