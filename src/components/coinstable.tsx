// // import * as React from "react";
// // import { useEffect, useState } from "react";
// // import Table from "@mui/material/Table";
// // import TableBody from "@mui/material/TableBody";
// // import TableCell from "@mui/material/TableCell";
// // import TableContainer from "@mui/material/TableContainer";
// // import TableHead from "@mui/material/TableHead";
// // import TableRow from "@mui/material/TableRow";
// // import Paper from "@mui/material/Paper";
// // // import fetch from 'node-fetch';

// // function createData(
// //   Assests: String,
// //   name: string,
// //   price: number,
// //   marketcap: number,
// //   marketcapchange: number,
// //   hourwise: number,
// //   daywise: number,
// //   weekwise: number,
// //   symbol: string,
// //   MarketCap: number,
// //   sevenD_percentage_change: number,
// //   oneD_change: number,
// //   oneD_percentage_change: number,
// //   total_supply: number,
// //   total_volume: number,
// //   oneHour_change: number
// // ) {
// //   return {
// //     Assests,
// //     name,
// //     price,
// //     marketcap,
// //     marketcapchange,
// //     hourwise,
// //     daywise,
// //     weekwise,
// //     symbol,
// //     MarketCap,
// //     sevenD_percentage_change,
// //     oneHour_change,
// //     oneD_change,
// //     oneD_percentage_change,
// //     total_supply,
// //     total_volume,
// //   };
// // }

// // function coinstable() {
// //   const [data, setData] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   //Pagination
// //   const [page, setPage] = useState(1);
// //   const [rowsPerPage, setRowsPerPage] = useState(10);

// //   const fetchData = async () => {
// //     const url =
// //       "https://deep-index.moralis.io/api/v2.2/market-data/global/market-cap";
// //     // const apiKey = process.env.NEXT_PUBLIC_MORALIS_API_KEY;
// //     const apiKey =
// //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImNlY2RjMDY4LThhM2QtNDU4OS1iMjkzLTA3YjRhMzQzMzY4MCIsIm9yZ0lkIjoiNDI0MTk4IiwidXNlcklkIjoiNDM2MjcyIiwidHlwZUlkIjoiZDRjNTAzOGEtMDU1OS00MWEzLTliNGMtYWM5YjQ1ODUxMjY0IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MzYwOTkwNTAsImV4cCI6NDg5MTg1OTA1MH0.5ZAw6kA-TEQQDeaAbwn1VFf-rNVH7AWfDotqgoBIKtI";
// //     try {
// //       const response = await fetch(url, {
// //         method: "GET",
// //         headers: {
// //           accept: "application/json",
// //           "X-API-Key": apiKey,
// //         },
// //       });

// //       if (!response.ok) {
// //         console.error(`HTTP Error: ${response.status} ${response.statusText}`);
// //         return;
// //       }

// //       const data = await response.json();
// //       console.log("Fetched Data:", data);
// //       console.log("Name is ", data[0].name);
// //       setData(data);
// //       setLoading(false);
// //     } catch (error) {
// //       console.error("Error fetching data:", error);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchData();
// //   }, []); // Fetch data on component mount

// //   const handleChangePage = (event, newPage) => {
// //     setPage(newPage);
// //   };

// //   const totalPage = Math.ceil(data.length / rowsPerPage);

// //   const dataPerPage = data.slice((page - 1) * rowsPerPage, page * rowsPerPage);

// //   return (
// //     <>
// //       <TableContainer component={Paper}>
// //         <Table sx={{ minWidth: 650 }} aria-label="simple table">
// //           <TableHead>
// //             <TableRow
// //               sx={{
// //                 fontWeight: "bold",
// //                 color: "black",
// //                 textAlign: "center",
// //                 borderBottom: "3px solid black",
// //               }}
// //             >
// //               <TableCell
// //                 sx={{
// //                   fontWeight: "bold",
// //                   fontSize: "20px",
// //                   fontFamily: "sans-serif",
// //                 }}
// //               >
// //                 Assests
// //               </TableCell>
// //               <TableCell
// //                 sx={{
// //                   fontWeight: "bold",
// //                   fontSize: "20px",
// //                   fontFamily: "sans-serif",
// //                 }}
// //               >
// //                 Name
// //               </TableCell>
// //               <TableCell
// //                 sx={{
// //                   fontWeight: "bold",
// //                   fontSize: "20px",
// //                   fontFamily: "sans-serif",
// //                 }}
// //               >
// //                 Symbol
// //               </TableCell>

// //               <TableCell
// //                 sx={{
// //                   fontWeight: "bold",
// //                   fontSize: "20px",
// //                   fontFamily: "sans-serif",
// //                 }}
// //               >
// //                 Market Cap(24H Change)
// //               </TableCell>

// //               <TableCell
// //                 sx={{
// //                   fontWeight: "bold",
// //                   fontSize: "20px",
// //                   fontFamily: "sans-serif",
// //                 }}
// //               >
// //                 Market Cap(24H % Change)
// //               </TableCell>

// //               <TableCell
// //                 sx={{
// //                   fontWeight: "bold",
// //                   fontSize: "20px",
// //                   fontFamily: "sans-serif",
// //                 }}
// //               >
// //                 Market Cap($)
// //               </TableCell>

// //               <TableCell
// //                 sx={{
// //                   fontWeight: "bold",
// //                   fontSize: "20px",
// //                   fontFamily: "sans-serif",
// //                 }}
// //               >
// //                 Market Cap Rank
// //               </TableCell>

// //               <TableCell
// //                 sx={{
// //                   fontWeight: "bold",
// //                   fontSize: "20px",
// //                   fontFamily: "sans-serif",
// //                 }}
// //               >
// //                 Total Supply
// //               </TableCell>

// //               <TableCell
// //                 sx={{
// //                   fontWeight: "bold",
// //                   fontSize: "20px",
// //                   fontFamily: "sans-serif",
// //                 }}
// //               >
// //                 Total Volume
// //               </TableCell>

// //               <TableCell
// //                 sx={{
// //                   fontWeight: "bold",
// //                   fontSize: "20px",
// //                   fontFamily: "sans-serif",
// //                 }}
// //               >
// //                 USD Price
// //               </TableCell>

// //               <TableCell
// //                 sx={{
// //                   fontWeight: "bold",
// //                   fontSize: "20px",
// //                   fontFamily: "sans-serif",
// //                 }}
// //               >
// //                 1H % Change($)
// //               </TableCell>
// //             </TableRow>
// //           </TableHead>
// //           <TableBody>
// //             {data.map((item, index) => (
// //               <TableRow key={index}>
// //                 <TableCell>{index + 1}</TableCell>
// //                 <TableCell>{item.name}</TableCell>
// //                 {/* <TableCell>{item.logo}</TableCell> */}
// //                 <TableCell>{item.symbol}</TableCell>

// //                 <TableCell>{item.market_cap_24hr_change}</TableCell>

// //                 <TableCell>{item.market_cap_24hr_percent_change}</TableCell>

// //                 <TableCell>{item.market_cap_usd}</TableCell>

// //                 <TableCell>{item.market_cap_rank}</TableCell>

// //                 <TableCell>{item.total_supply}</TableCell>

// //                 <TableCell>{item.total_volume}</TableCell>

// //                 <TableCell>{item.usd_price}</TableCell>

// //                 <TableCell>{item.usd_price_1hr_percent_change}</TableCell>
// //               </TableRow>
// //             ))}

// //             {/* {rows.map((row) => (
// //               <TableRow
// //                 key={row.name}
// //                 sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
// //               >
// //                 <TableCell component="th" scope="row">
// //                   {row.Assests}
// //                 </TableCell>
// //                 <TableCell>{row.name}</TableCell>
// //                 <TableCell>{row.price}</TableCell>
// //                 <TableCell>{row.marketcap}</TableCell>
// //                 <TableCell>{row.marketcapchange}</TableCell>
// //                 <TableCell>{row.hourwise}</TableCell>
// //                 <TableCell>{row.daywise}</TableCell>
// //                 <TableCell>{row.weekwise}</TableCell>
// //               </TableRow>
// //             ))} */}
// //           </TableBody>
// //         </Table>
// //       </TableContainer>
// //     </>
// //   );
// // }

// // export default coinstable;



// import * as React from "react";
// import { useEffect, useState } from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import Pagination from "@mui/material/Pagination";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";

// function createData(
//   Assests: String,
//   name: string,
//   price: number,
//   marketcap: number,
//   marketcapchange: number,
//   hourwise: number,
//   daywise: number,
//   weekwise: number,
//   symbol: string,
//   MarketCap: number,
//   sevenD_percentage_change: number,
//   oneD_change: number,
//   oneD_percentage_change: number,
//   total_supply: number,
//   total_volume: number,
//   oneHour_change: number
// ) {
//   return {
//     Assests,
//     name,
//     price,
//     marketcap,
//     marketcapchange,
//     hourwise,
//     daywise,
//     weekwise,
//     symbol,
//     MarketCap,
//     sevenD_percentage_change,
//     oneHour_change,
//     oneD_change,
//     oneD_percentage_change,
//     total_supply,
//     total_volume,
//   };
// }

// function coinstable() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
  
//   // Pagination states
//   const [page, setPage] = useState(1);
//   const [rowsPerPage, setRowsPerPage] = useState(10);

//   const fetchData = async () => {
//     const url =
//       "https://deep-index.moralis.io/api/v2.2/market-data/global/market-cap";
//     const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImNlY2RjMDY4LThhM2QtNDU4OS1iMjkzLTA3YjRhMzQzMzY4MCIsIm9yZ0lkIjoiNDI0MTk4IiwidXNlcklkIjoiNDM2MjcyIiwidHlwZUlkIjoiZDRjNTAzOGEtMDU1OS00MWEzLTliNGMtYWM5YjQ1ODUxMjY0IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MzYwOTkwNTAsImV4cCI6NDg5MTg1OTA1MH0.5ZAw6kA-TEQQDeaAbwn1VFf-rNVH7AWfDotqgoBIKtI';
//     try {
//       const response = await fetch(url, {
//         method: "GET",
//         headers: {
//           accept: "application/json",
//           "X-API-Key": apiKey,
//         },
//       });

//       if (!response.ok) {
//         console.error(`HTTP Error: ${response.status} ${response.statusText}`);
//         return;
//       }

//       const data = await response.json();
//       console.log("Fetched Data:", data);
//       setData(data);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []); // Fetch data on component mount

//   // Handle page change
//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   // Calculate pagination
//   const totalPages = Math.ceil(data.length / rowsPerPage);
  
//   // Get current page data
//   const currentPageData = data.slice(
//     (page - 1) * rowsPerPage,
//     page * rowsPerPage
//   );

//   return (
//     <>
//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 650 }} aria-label="simple table">
//           <TableHead>
//             <TableRow
//               sx={{
//                 fontWeight: "bold",
//                 color: "black",
//                 textAlign: "center",
//                 borderBottom: "3px solid black",
//               }}
//             >
//               <TableCell
//                 sx={{
//                   fontWeight: "bold",
//                   fontSize: "20px",
//                   fontFamily: "sans-serif",
//                 }}
//               >
//                 Assests
//               </TableCell>
//               <TableCell
//                 sx={{
//                   fontWeight: "bold",
//                   fontSize: "20px",
//                   fontFamily: "sans-serif",
//                 }}
//               >
//                 Name
//               </TableCell>
//               <TableCell
//                 sx={{
//                   fontWeight: "bold",
//                   fontSize: "20px",
//                   fontFamily: "sans-serif",
//                 }}
//               >
//                 Symbol
//               </TableCell>
            
//               <TableCell
//                 sx={{
//                   fontWeight: "bold",
//                   fontSize: "20px",
//                   fontFamily: "sans-serif",
//                 }}
//               >
//                 Market Cap(24H Change)
//               </TableCell>

//               <TableCell
//                 sx={{
//                   fontWeight: "bold",
//                   fontSize: "20px",
//                   fontFamily: "sans-serif",
//                 }}
//               >
//                 Market Cap(24H % Change)
//               </TableCell>
           
//               <TableCell
//                 sx={{
//                   fontWeight: "bold",
//                   fontSize: "20px",
//                   fontFamily: "sans-serif",
//                 }}
//               >
//                 Market Cap($)
//               </TableCell>

//               <TableCell
//                 sx={{
//                   fontWeight: "bold",
//                   fontSize: "20px",
//                   fontFamily: "sans-serif",
//                 }}
//               >
//                 Market Cap Rank
//               </TableCell>

//               <TableCell
//                 sx={{
//                   fontWeight: "bold",
//                   fontSize: "20px",
//                   fontFamily: "sans-serif",
//                 }}
//               >
//                 Total Supply
//               </TableCell>

//               <TableCell
//                 sx={{
//                   fontWeight: "bold",
//                   fontSize: "20px",
//                   fontFamily: "sans-serif",
//                 }}
//               >
//                 Total Volume
//               </TableCell>

//               <TableCell
//                 sx={{
//                   fontWeight: "bold",
//                   fontSize: "20px",
//                   fontFamily: "sans-serif",
//                 }}
//               >
//                 USD Price 
//               </TableCell>

//               <TableCell
//                 sx={{
//                   fontWeight: "bold",
//                   fontSize: "20px",
//                   fontFamily: "sans-serif",
//                 }}
//               >
//                 1H % Change($)
//               </TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {loading ? (
//               <TableRow>
//                 <TableCell colSpan={11} align="center">
//                   Loading...
//                 </TableCell>
//               </TableRow>
//             ) : currentPageData.length > 0 ? (
//               currentPageData.map((item, index) => (
//                 <TableRow key={index}>
//                   <TableCell>{(page - 1) * rowsPerPage + index + 1}</TableCell>
//                   <TableCell>{item.name}</TableCell>
//                   <TableCell>{item.symbol}</TableCell>
//                   <TableCell>{item.market_cap_24hr_change}</TableCell>
//                   <TableCell>{item.market_cap_24hr_percent_change}</TableCell>
//                   <TableCell>{item.market_cap_usd}</TableCell>
//                   <TableCell>{item.market_cap_rank}</TableCell>
//                   <TableCell>{item.total_supply}</TableCell>
//                   <TableCell>{item.total_volume}</TableCell>
//                   <TableCell>{item.usd_price}</TableCell>
//                   <TableCell>{item.usd_price_1hr_percent_change}</TableCell>
//                 </TableRow>
//               ))
//             ) : (
//               <TableRow>
//                 <TableCell colSpan={11} align="center">
//                   No data available
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {/* Pagination component */}
//       <Box sx={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
//         <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//           <Typography variant="body2">
//             Showing {Math.min(data.length, (page - 1) * rowsPerPage + 1)} - {Math.min(data.length, page * rowsPerPage)} of {data.length} items
//           </Typography>
//           <Pagination 
//             count={totalPages} 
//             page={page} 
//             onChange={handleChangePage} 
//             color="primary" 
//             showFirstButton 
//             showLastButton
//           />
//         </Box>
//       </Box>
//     </>
//   );
// }

// export default coinstable;



import * as React from "react";
import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function createData(
  Assests: String,
  name: string,
  price: number,
  marketcap: number,
  marketcapchange: number,
  hourwise: number,
  daywise: number,
  weekwise: number,
  symbol: string,
  MarketCap: number,
  sevenD_percentage_change: number,
  oneD_change: number,
  oneD_percentage_change: number,
  total_supply: number,
  total_volume: number,
  oneHour_change: number
) {
  return {
    Assests,
    name,
    price,
    marketcap,
    marketcapchange,
    hourwise,
    daywise,
    weekwise,
    symbol,
    MarketCap,
    sevenD_percentage_change,
    oneHour_change,
    oneD_change,
    oneD_percentage_change,
    total_supply,
    total_volume,
  };
}

function coinstable() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Pagination states
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const fetchData = async () => {
    const url =
      "https://deep-index.moralis.io/api/v2.2/market-data/global/market-cap";
    const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImNlY2RjMDY4LThhM2QtNDU4OS1iMjkzLTA3YjRhMzQzMzY4MCIsIm9yZ0lkIjoiNDI0MTk4IiwidXNlcklkIjoiNDM2MjcyIiwidHlwZUlkIjoiZDRjNTAzOGEtMDU1OS00MWEzLTliNGMtYWM5YjQ1ODUxMjY0IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MzYwOTkwNTAsImV4cCI6NDg5MTg1OTA1MH0.5ZAw6kA-TEQQDeaAbwn1VFf-rNVH7AWfDotqgoBIKtI';
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          accept: "application/json",
          "X-API-Key": apiKey,
        },
      });

      if (!response.ok) {
        console.error(`HTTP Error: ${response.status} ${response.statusText}`);
        return;
      }

      const data = await response.json();
      console.log("Fetched Data:", data);
      setData(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Fetch data on component mount

  // Handle page change
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Calculate pagination
  const totalPages = Math.ceil(data.length / rowsPerPage);
  
  // Get current page data
  const currentPageData = data.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow
              sx={{
                fontWeight: "bold",
                color: "black",
                textAlign: "center",
                borderBottom: "3px solid black",
              }}
            >
              <TableCell
                sx={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  fontFamily: "sans-serif",
                }}
              >
                Assests
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  fontFamily: "sans-serif",
                }}
              >
                Name
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  fontFamily: "sans-serif",
                }}
              >
                Symbol
              </TableCell>
            
              <TableCell
                sx={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  fontFamily: "sans-serif",
                }}
              >
                Market Cap(24H Change)
              </TableCell>

              <TableCell
                sx={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  fontFamily: "sans-serif",
                }}
              >
                Market Cap(24H % Change)
              </TableCell>
           
              <TableCell
                sx={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  fontFamily: "sans-serif",
                }}
              >
                Market Cap($)
              </TableCell>

              <TableCell
                sx={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  fontFamily: "sans-serif",
                }}
              >
                Market Cap Rank
              </TableCell>

              <TableCell
                sx={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  fontFamily: "sans-serif",
                }}
              >
                Total Supply
              </TableCell>

              <TableCell
                sx={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  fontFamily: "sans-serif",
                }}
              >
                Total Volume
              </TableCell>

              <TableCell
                sx={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  fontFamily: "sans-serif",
                }}
              >
                USD Price 
              </TableCell>

              <TableCell
                sx={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  fontFamily: "sans-serif",
                }}
              >
                1H % Change($)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={11} align="center">
                  Loading...
                </TableCell>
              </TableRow>
            ) : currentPageData.length > 0 ? (
              currentPageData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{(page - 1) * rowsPerPage + index + 1}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.symbol}</TableCell>
                  <TableCell>{item.market_cap_24hr_change}</TableCell>
                  <TableCell>{item.market_cap_24hr_percent_change}</TableCell>
                  <TableCell>{item.market_cap_usd}</TableCell>
                  <TableCell>{item.market_cap_rank}</TableCell>
                  <TableCell>{item.total_supply}</TableCell>
                  <TableCell>{item.total_volume}</TableCell>
                  <TableCell>{item.usd_price}</TableCell>
                  <TableCell>{item.usd_price_1hr_percent_change}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={11} align="center">
                  No data available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination component */}
      <Box sx={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="body2">
            Showing {Math.min(data.length, (page - 1) * rowsPerPage + 1)} - {Math.min(data.length, page * rowsPerPage)} of {data.length} items
          </Typography>
          <Pagination 
            count={totalPages} 
            page={page} 
            onChange={handleChangePage} 
            color="primary" 
            showFirstButton 
            showLastButton
          />
        </Box>
      </Box>
    </>
  );
}

export default coinstable;