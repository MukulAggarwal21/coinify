
// import  { useState, useEffect } from 'react';
// import Newsitem from './Newsitem';
// import Spinner from './spinner';
// const url = "https://newsapi.org/v2/everything?q=cryptocurrency&from=2025-01-08&sortBy=publishedAt&apiKey=40a7c6a6321c4dfd82e8ca4e983a9f83"

// //  function handleNextPage(){
     
// // }

// function News() {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(false);
 

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch(url);
//         const result = await response.json();
//         console.log(result.articles);

//         setArticles(result.articles);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//       setLoading(false);
//     };

//     fetchData();
//   }, []);

//   return (

//     <div className="container mt-4">
//       <center>
//         <h1 className="text-center text-red-900" style={{ margin: '30px 0px ' }}>
//           YOUR DAILY DOSE OF NEWS
//         </h1>
//       </center>


//       {loading &&
//         <div className=' my-56  mx-96  px-52'>
//           <Spinner />
//         </div>
//       }

//       <div className="row row-cols-1 row-cols-md-3 g-4">
//         {articles.length > 0 ? (
//           articles.map((element) => (
//             <div className="col" key={element.url}>
//               <Newsitem
//                 title={element.title ? element.title.slice(0, 65) : ''}
//                 imageUrl={element.urlToImage}
//                 description={element.description ? element.description.slice(0, 74) + '.....' : 'Deep Dive into it through ReadMore to get more Updated right Now.....  '}
//                 newsUrl={element.url}
//                 author={element.author}
//                 date={element.publishedAt}
//                 source={element.source?.name}
//               />
//             </div>
//           ))
//         ) : (
//           !loading && <p>No news found.</p>
//         )}
//       </div>

//       <div className='flex flex-row justify-between py-4'>
//         <button className='bg-slate-600 text-white rounded-lg p-2 text-xl font-semibold' >Previous</button>
//         <button className='bg-slate-600 text-white rounded-lg  p-2 text-xl font-semibold' >Next</button>
//       </div>
//     </div>
//   );
// }

// export default News;




import { useState, useEffect } from 'react';
import Newsitem from './Newsitem';
import Spinner from './spinner';

function News() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const pageSize = 6; // NewsAPI default page size

  const baseUrl = "https://newsapi.org/v2/everything";
  const apiKey = "40a7c6a6321c4dfd82e8ca4e983a9f83";

  const fetchData = async (pageNum) => {
    setLoading(true);
    try {
      const url = `${baseUrl}?q=cryptocurrency&from=2025-01-08&sortBy=publishedAt&page=${pageNum}&pageSize=${pageSize}&apiKey=${apiKey}`;
      const response = await fetch(url);
      const result = await response.json();
      
      if (result.status === 'ok') {
        setArticles(result.articles);
        setTotalResults(result.totalResults);
      } else {
        console.error('API Error:', result.message);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    const totalPages = Math.ceil(totalResults / pageSize);
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <div className="container mt-4">
      <center>
        <h1 className="text-center text-red-900" style={{ margin: '30px 0px' }}>
          YOUR DAILY DOSE OF NEWS
        </h1>
      </center>

      {loading && (
        <div className="my-56 mx-96 px-52">
          <Spinner />
        </div>
      )}

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {articles.length > 0 ? (
          articles.map((element) => (
            <div className="col" key={element.url}>
              <Newsitem
                title={element.title ? element.title.slice(0, 65) : ''}
                imageUrl={element.urlToImage}
                description={
                  element.description
                    ? element.description.slice(0, 74) + '.....'
                    : 'Deep Dive into it through ReadMore to get more Updated right Now.....'
                }
                newsUrl={element.url}
                author={element.author}
                date={element.publishedAt}
                source={element.source?.name}
              />
            </div>
          ))
        ) : (
          !loading && <p>No news found.</p>
        )}
      </div>

      <div className="flex flex-row justify-between py-4">
        <button
          className={`bg-slate-600 text-white rounded-lg p-2 text-xl font-semibold ${
            page <= 1 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={handlePreviousPage}
          disabled={page <= 1}
        >
          Previous
        </button>
        <span className="self-center text-lg">
          Page {page}
        </span>
        <button
          className={`bg-slate-600 text-white rounded-lg p-2 text-xl font-semibold ${
            page >= Math.ceil(totalResults / pageSize) ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={handleNextPage}
          disabled={page >= Math.ceil(totalResults / pageSize)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default News;