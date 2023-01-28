import { useSession,signIn,signOut } from "next-auth/react"
import Image from "next/image"

function User({className}) {
    const {data:session} = useSession()
    
  return (
    <>
        {session && (<><Image height="44" width="44" onClick={signOut} src={session.user.image} className={`cursor-pointer h-10 w-10 rounded-full hover:bg-gray-200 p-1 ${className}`} alt="logo"/></>)}
        {!session && (<><button onClick={signIn} className={`bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-110 hover:shadow-md ${className}`}>SignIn</button></>)}
    </>
  )
}

export default User
