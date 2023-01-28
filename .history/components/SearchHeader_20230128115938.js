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
     div

      
    </header>
  )
}

export default SearchHeader
