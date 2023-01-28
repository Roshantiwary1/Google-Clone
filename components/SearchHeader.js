import React, { useRef } from 'react'
import Image  from 'next/image';
import {FaSearch} from "react-icons/fa"
import {HiMicrophone} from "react-icons/hi"
import {RxCross2} from "react-icons/rx"
import { useRouter } from 'next/router';
import User from './User';

const SearchHeader = () => {
    const router = useRouter()
    const searchInputRef = useRef(null);

    function search(e){
        e.preventDefault();
        const term = searchInputRef.current.value;
        if(!term.trim()){return}
        router.push(`/search?term=${term.trim()}`)
    }
  return (
    <header className='sticky top-0 bg-white flex items-center sm:p-6 p-4'>
      <Image width="100" height="50" onClick={()=>router.push("/")}  className='cursor-pointer w-[100px] 
      sm:w-[120px] object-contain' src="https://www.citypng.com/public/uploads/preview/-11596994727l1jw5lvpmc.png" alt="logo"/>

      <form onSubmit={search} className='flex border border-gray-200 rounded-full shadow-lg px-6 sm:py-3 py-2 ml-2 mr-6 sm:ml-10 md:ml-15 xl:ml-20 max-w-4xl flex-grow items-center min-w-[200px] overflow-x-hidden'>
        <input type="text" defaultValue={router.query.term} ref={searchInputRef} className="w-full focus:outline-none"/>
            <RxCross2 onClick={()=>searchInputRef.current.value=""} className='text-gray-600 sm:mr-4 text-xl mr-3 cursor-pointer'/>
            <HiMicrophone className='hidden sm:inline-flex text-blue-500 cursor-pointer text-lg mr-3'/>
            <FaSearch onClick={search} className='hidden sm:inline-flex text-blue-500 cursor-pointer'/>
      </form>

      <User className="ml-auto"/>
    </header>
  )
}

export default SearchHeader
