import React from 'react'
import Header from '../../components/Header';
import { getProviders, signIn  } from 'next-auth/react';
import Image from 'next/image';
const signin = ({Providers}) => {
  return (
    <>
      <Header/>
      <div className="mt-7 flex justify-center">
        {Object.values(Providers).map((provider)=>(
            <div key={provider.name} className="flex justify-center flex-col items-center">
                <img className='w-[350px] object-cover' src="https://www.citypng.com/public/uploads/preview/-11596994727l1jw5lvpmc.png" alt="logo"/>
                <p className='text-sm italic mb-10 text-center text-gray-600'>this app is created for learning purposes</p>
                <button onClick={()=>(signIn(provider.id , {callbackUrl:"/"}))} className="bg-blue-500 rounded-lg text-white p-3 hover:bg-blue-600">SignIn with {provider.name}</button>
            </div>
        ))}
      </div>
    </>
  )
}

export default signin

export async function getServerSideProps(){
    const Providers = await getProviders();

    return{
        props:{
            Providers
        }
    }
}
