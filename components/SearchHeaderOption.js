import { useRouter } from "next/router"

const SearchHeaderOption = ({title,Icon,selected}) => {
  const router=useRouter()

  const chosse=(title)=>{
    router.push(`/search?term=${router.query.term}&searchType=${title=="Images"?"image":""}`)
   
  }
  
  return (
    <div onClick={()=>chosse(title)} className={`flex items-center space-x-1 pb-2 border-b-4 border-transparent hover:border-blue-500 hover:blue-500 cursor-pointer ${selected && "text-blue-500 border-blue-500"}`}>
    <Icon/>
      <p className='text-sm'>{title}</p>

    </div>
  )
}

export default SearchHeaderOption
