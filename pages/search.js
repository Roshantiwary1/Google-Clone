import Response from "../Response";
import Head from "next/head"
import SearchHeader from './../components/SearchHeader';
import SearchResults from './../components/SearchResults';
import { useRouter } from 'next/router';
import ImageResults from './../components/ImageResults';



const search = ({results}) => {
  console.log(results)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter()
  return (
    <div>
      <Head>
        <title>{router.query.term} - Search Page</title>
      </Head>

    {/* search header */}
    <SearchHeader/>

    {/* search result */}
   
    {router.query.searchType==="image"?(
      <ImageResults results={results}/>
    ):(
      <SearchResults results={results}/>
    )}
    
    </div>
  )
}

export default search

export async function getServerSideProps(context){
  const StartIndex = context.query.start || "1"
const mockData=true;
  const data =mockData? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.GOOGLE_CX_KEY}&q=${context.query.term}${context.query.searchType && "&searchType=image"}&start=${StartIndex}`).then((response)=>response.json());

  return{
    props:{
        results:data,
    }
  }
}