import Head from "next/head";
import RootLayout from "@/components/Layouts/RootLayout";
import Banner from "@/components/UI/Banner";


const HomePage = ({allNews}) => {
  console.log(allNews)
  return (
    <>
      <Head>
        <title>MT-15 News Portal</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
    </>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};


//todo: next js build in data fetching funtion
//* this  works in server side only

export const getStaticProps=async()=>{
  const response =await fetch('http://localhost:5000/news');
  const fetchedData =await response.json();
  // console.log(fetchedData);

  return{
    // props:{}
    props:{
      allNews:fetchedData
    }
  };

}
