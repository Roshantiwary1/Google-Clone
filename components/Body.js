import {FaSearch} from "react-icons/fa"
import {HiMicrophone} from "react-icons/hi"
import Image from 'next/image';

const Body = () => {
  return (
    <form className="flex flex-col items-center mt-7">
        <Image width="550" height="150" src="https://www.pngall.com/wp-content/uploads/5/Google-Logo-PNG-Free-Image.png" alt="google" />
        <div className="flex w-full mt-5 mx-auto max-w-[90%] border border-gary-200 hover:shadow-lg focus-within:shadow-lg px-5 py-3 rounded-full items-center sm:max-w-xl lg:max-w-2xl">
          <FaSearch className="h-7 text-gray-700 mr-3"/>
          <input type="text" className="flex-grow focus:outline-none"/>
          <HiMicrophone className="h-7 text-gray-700"/>
        </div>
        <div className="flex flex-col sm:flex-row w-[50%] space-y-2 mt-8 sm:space-y-0 sm:space-x-4 justify-center">
          <button className=" bg-[#f8f9fa] font-medium p-3 rounded-md text-sm text-gray-700 hover:ring-1 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md">Google Search</button>
          <button className=" bg-[#f8f9fa] font-medium p-3 rounded-md text-sm text-gray-700 hover:ring-1 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md">I&apos;m Feeling Lucky</button>
        </div>
    </form>
  )
}

export default Body
