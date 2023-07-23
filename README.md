###    1.Static Props

-    Install json server `npm i json-server`
- [server is running](http://localhost:5000/news)
- go to index.js file 


```javascript
//todo: next js build in data fetching funtion
//* this  works in server side only

export const getStaticProps=async()=>{
  const response =await fetch('http://localhost:5000/news');
  const fetchedData =await response.json();
  console.log(fetchedData);

  return{
    props:{}
  };

}

```


## Getting Started

Clone This Starter File

Then, run 
```bash
npm install
#or
npm i

After that, run the development server:

npm run dev
npm run json-server





