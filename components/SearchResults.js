import Parser from "html-react-parser"

const SearchResults = ({results}) => {
  return (
    <div className='px-3 sm:pl-[5%] md:pl-[14%] lg:pl-[221px]'>
      <p className='text-sm text-gray-600 mb-5 '>About {results.searchInformation.formattedTotalResults} results ({results.searchInformation.formattedSearchTime})sec </p>

      {results.items.map(result=>(
        <div key={result.link} className="max-w-2xl mb-6">
            <div className="group">
                <a href={result.link} className="text-sm truncate">{result.formattedUrl}</a>
                <a href={result.link} className="group-hover:underline decoration-blue-800"><h2 className="truncate text-xl font-medium text-blue-800">{result.title}</h2></a>
            </div>
            <p className="text-gray-600">{Parser(result.htmlSnippet)}</p>
        </div>
      ))}
    </div>
  )
}

export default SearchResults
