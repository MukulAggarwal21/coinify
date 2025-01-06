import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import fetch from 'node-fetch';

function createData(
  Assests: String,
  name: string,
  price: number,
  marketcap: number,
  marketcapchange: number,
  hourwise: number,
  daywise: number,
  weekwise: number
) {
  return { Assests, name, price, marketcap, marketcapchange , hourwise, daywise, weekwise };
}

const rows = [
  createData("BTC", "Bitcoin", 123456, 48979323, 4.0, 5, 6, 0.9),
  createData("ETH", "Ice cream sandwich", 237, 9.0, 3.0 ,37, 4.3, 4),
  createData("USDT", "Eclair", 262, 16.0, 24,2,  6.0, 5),
  createData("XRP", "Gingerbread", 356, 16.0, 3.9, 49, 3.9, 3),
  createData("BNB", "Cupcake", 305, 3.7, 67, 4.0, 4.3, 6),
];

const fetchData = async () => {
    const url = 'https://deep-index.moralis.io/api/v2.2/market-data/global/market-cap';
    // const apiKey = process.env.NEXT_PUBLIC_MORALIS_API_KEY;
    const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImNlY2RjMDY4LThhM2QtNDU4OS1iMjkzLTA3YjRhMzQzMzY4MCIsIm9yZ0lkIjoiNDI0MTk4IiwidXNlcklkIjoiNDM2MjcyIiwidHlwZUlkIjoiZDRjNTAzOGEtMDU1OS00MWEzLTliNGMtYWM5YjQ1ODUxMjY0IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MzYwOTkwNTAsImV4cCI6NDg5MTg1OTA1MH0.5ZAw6kA-TEQQDeaAbwn1VFf-rNVH7AWfDotqgoBIKtI'

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                'X-API-Key': apiKey
            }
        });

        if (!response.ok) {
            console.error(`HTTP Error: ${response.status} ${response.statusText}`);
            return;
        }

        const data = await response.json();
        console.log('Fetched Data:', data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

fetchData();

function coinstable() {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow  sx={{
        fontWeight: "bold",
        color: "black",
        textAlign: "center",
        borderBottom: "3px solid black",
      }}>
              <TableCell sx={{fontWeight: "bold", fontSize:"20px", fontFamily:"sans-serif"}} > Assests</TableCell>
              <TableCell sx={{fontWeight: "bold", fontSize:"20px", fontFamily:"sans-serif"}} >Name</TableCell>
              <TableCell sx={{fontWeight: "bold", fontSize:"20px", fontFamily:"sans-serif"}} >Price</TableCell>
              <TableCell sx={{fontWeight: "bold", fontSize:"20px", fontFamily:"sans-serif"}} >Market Cap</TableCell>
              <TableCell sx={{fontWeight: "bold", fontSize:"20px", fontFamily:"sans-serif"}} >Market Cap Change</TableCell>
              <TableCell sx={{fontWeight: "bold", fontSize:"20px", fontFamily:"sans-serif"}} >1H %</TableCell>
              <TableCell sx={{fontWeight: "bold", fontSize:"20px", fontFamily:"sans-serif"}} >24H %</TableCell>
              <TableCell sx={{fontWeight: "bold", fontSize:"20px", fontFamily:"sans-serif"}} >7D %</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.Assests}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>{row.marketcap}</TableCell>
                <TableCell>{row.marketcapchange}</TableCell>
                <TableCell>{row.hourwise}</TableCell>
                <TableCell>{row.daywise}</TableCell>
                <TableCell>{row.weekwise}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default coinstable;
