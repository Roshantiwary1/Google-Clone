import {FaSearch} from "react-icons/fa"
import {HiMicrophone} from "react-icons/hi"
import Image from 'next/image';
import { useRouter } from "next/router";
import { useRef } from "react";

const Body = () => {

  const router = useRouter();
   const searchInputRef = useRef(null)

   const searchHandler=(event)=>{
    event.preventDefault();
    const term=searchInputRef.current.value;
    if(!term.trim()){return}
    router.push(`/search?term=${term.trim()}&searchType=`)
   }
   async function randomSearch(event) {
    event.preventDefault();
    const randomTerm = await fetch(
      "https://random-word-api.herokuapp.com/word?number=1"
    ).then((response) => response.json());
    if (!randomTerm) return;
    router.push(`/search?term=${randomTerm}&searchType=`);
  }

  return (
    <form className="flex flex-col items-center mt-7" onSubmit={searchHandler} >
        <Image width="550" height="150" src="https://www.pngall.com/wp-content/uploads/5/Google-Logo-PNG-Free-Image.png" alt="google" />
        <div className="flex w-full mt-5 mx-auto max-w-[90%] border border-gary-200 hover:shadow-lg focus-within:shadow-lg px-5 py-3 rounded-full items-center sm:max-w-xl lg:max-w-2xl">
          <FaSearch className="h-7 text-gray-700 mr-3"/>
          <input ref={searchInputRef} type="text" className="flex-grow focus:outline-none"/>
          <HiMicrophone className="h-7 text-gray-700 text-lg"/>
        </div>
        <div className="flex whitespace-nowrap items-center flex-row w-[50%] space-y-2 mt-2 sm:mt-8 sm:space-y-0 space-x-2 sm:space-x-4 justify-center">
          <button type="submit" className="  font-medium p-3 rounded-md text-sm text-gray-700 hover:ring-1 text-center hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md">Google Search</button>
          <button onClick={randomSearch} className="  font-medium pt-3 px-3 sm:pb-3 pb-[21px]  rounded-md text-sm text-gray-700 hover:ring-1 hover:ring-gray-200 focus:outline-none text-center active:ring-gray-300 hover:shadow-md">I&apos;m Feeling Lucky</button>
        </div>
    </form>
  )
}

export default Body
