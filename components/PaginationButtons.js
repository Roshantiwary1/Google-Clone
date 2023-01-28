import {GrFormNext,GrFormPrevious} from "react-icons/gr"
import { useRouter } from "next/router"
import Link from "next/link"

function PaginationButtons() {
    const router = useRouter()
    let startIndex = Number(router.query.start) || 1;
  return (
    <div className=" flex sm:space-x-44 justify-between px-9 pb-4 sm:justify-start sm:p-0 mt-9 sm:pb-5">
    {startIndex>10 && (
       
        <Link href={`/search?term=${router.query.term}&searchType=${router.query.searchType}&start=${startIndex-10}`}>
        <div className="flex flex-col items-center cursor-pointer">
        <GrFormPrevious className="text-2xl"/>
        <p>prev</p>
        </div>
        </Link>
    
    )}
    {startIndex<90 && (
        <Link href={`/search?term=${router.query.term}&searchType=${router.query.searchType}&start=${startIndex+10}`}>
        <div className="flex flex-col items-center cursor-pointer">
        <GrFormNext className="text-2xl text-blue-600"/>
        <p>next</p>
        </div>
      </Link>
    )}
      
    </div>
  )
}

export default PaginationButtons
