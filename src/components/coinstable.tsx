import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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
