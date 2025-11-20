
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About - YIH174",
  description: "Developers About. Read his story about his career to be an developers."
}

const About = () => {
  return (
    <div>
        <Link href="/"><p className="mx-auto rounded-md bg-gray-300 text-gray-900 text-center text-lg md:text-xl lg:text-2xl p-4 h-auto mb-2">Home</p></Link>
        <div className="bg-blue-500 w-full p-4 mb-2 rounded-md">
            <h1 className="text-xl md:text-2xl lg:text-3xl text-gray-100 text-center">About</h1>
        </div>
        <Link href="/post"><p className="mx-auto rounded-md bg-gray-300 text-gray-900 text-center text-lg md:text-xl lg:text-2xl p-4 h-auto mb-2">Post</p></Link>
        <div className="border-gray-300 border-2 rounded-md text-lg md:text-xl lg:text-2xl p-4">
          <h2>About Me:</h2>
          <table className="p-4">
            <tbody className="p-4">
              <tr>
                <td className="p-4">Real Name:</td>
                <td className="p-4">R. Rezqi R.</td>
              </tr>
              <tr>
                <td className="p-4">Fake Name:</td>
                <td className="p-4">YIG174</td>
              </tr>
              <tr>
                <td className="p-4">From:</td>
                <td className="p-4">Indonesian</td>
              </tr>
            </tbody>
          </table>
          
        </div>
    </div>
  )
}

export default About