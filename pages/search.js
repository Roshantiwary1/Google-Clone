import Response from "../Response";
import Head from "next/head"
import SearchHeader from './../components/SearchHeader';


const search = ({results}) => {

  console.log(results)

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

export async function getServerSideProps(context){
const mockData=true;
  const data =mockData? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.GOOGLE_CX_KEY}&q=${context.query.term}${context.query.searchType && "&searchType=image"}`).then((response)=>response.json());

  return{
    props:{
        results:data,
    }
  }
}