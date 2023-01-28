import React from 'react'

const SearchResults = ({results}) => {
  return (
    <div className='px-3 sm:pl-[5%] md:pl-[14%] lg:pl-[221px]'>
      <p className='text-sm text-gray-600 mb-5 '>About {results.searchInformation.formattedTotalResults} results ({results.searchInformation.formattedSearchTime})sec </p>
    </div>
  )
}

export default SearchResults
