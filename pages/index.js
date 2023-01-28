import Head  from 'next/head';
import Header from '../components/Header';
import Body from './../components/Body';


export default function Home() {
  return (  
    <>
      <Head>
        <title>Google Clone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
     {/* Header */}
      <Header/>
     {/* Body */}
      <Body/>
     {/* Footer */}
     <div className='absolute bottom-0 whitespace-nowrap left-[50%] translate-x-[-50%] text-sm text-gray-500'>
      <p>copyright &copy; {new Date().getFullYear()} Roshan Tiwary</p>
     </div>
      </main>
    </>
  )
}
