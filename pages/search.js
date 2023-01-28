import Head from "next/head"
import SearchHeader from './../components/SearchHeader';


const search = () => {
  return (
    <div>
      <Head>
        <title>Search Result</title>
      </Head>

    {/* search header */}
    <SearchHeader/>

    {/* search result */}
    </div>
  )
}

export default search
