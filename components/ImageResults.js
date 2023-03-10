import React from 'react'
import PaginationButtons from './PaginationButtons'

const ImageResults = ({results}) => {
  return (
    <div className='mt-4'>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 px-3 space-x-10">
        {results.items.map(result=>(
            <div key={result.link}>
                <div className="group mb-10 ml-1">
                    <a href={result.image.contextLink}><img className='group-hover:shadow-xl h-60 object-contain w-full' src={result?.link} alt={result?.title} /></a>
                    <a className='group-hover:underline' href={result.image.contextLink}><h2 className='truncate text-xl'>{result?.title}</h2></a>
                    <a href={result.image.contextLink}><p className='text-gray-500'>{result.displayLink}</p></a>
                </div>
            </div>
        ))}
      </div>
      <div className="ml-16">
        <PaginationButtons/>
      </div>
    </div>
  )
}

export default ImageResults
