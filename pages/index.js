import Head from 'next/head'
import ArticleList from '../components/ArticleList'

export default function Home({articles}) {
 
  return (
    <div >
      <Head>
        <title>WebDev news</title>
        <meta name="keywords" content="web devpt"/>
      </Head>
      <ArticleList articles={articles}/>
    </div>
  )
}

export const getStaticProps =async()=>{
 try
{ 
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()
  return{
    props:{
      articles
    }
  }
}catch(error){
  console.log(error.message)
}
  
}
