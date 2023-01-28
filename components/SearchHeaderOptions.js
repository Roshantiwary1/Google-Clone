import { useRouter } from 'next/router'
import SearchHeaderOption from './SearchHeaderOption'
import {CiImageOn} from "react-icons/ci"
import {AiOutlineSearch} from "react-icons/ai"

const SearchHeaderOptions = () => {
  const router=useRouter();
  return (
    <div className='flex space-x-8 select-none ml-[120px] sm:ml[0] text-md border-b pt-2 text-gray-700 lg:ml-[210px] lg:justify-start'>
      <SearchHeaderOption title="All" Icon={AiOutlineSearch} selected={router.query.searchType==="" || !router.query.searchType}/>
      <SearchHeaderOption title="Images" Icon={CiImageOn} selected={router.query.searchType==="image"}/>
    </div>
  )
}

export default SearchHeaderOptions
