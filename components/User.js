import { useSession,signIn,signOut } from "next-auth/react"

function User() {
    const {data:session} = useSession()
    
  return (
    <>
        {session && (<><img onClick={signOut} src={session.user.image} className="cursor-pointer h-10 w-10 rounded-full hover:bg-gray-200 p-1"/></>)}
        {!session && (<><button onClick={signIn} className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-110 hover:shadow-md">SignIn</button></>)}
    </>
  )
}

export default User
