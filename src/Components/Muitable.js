import * as React from 'react';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Navbar from './Navbar';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));







export default function Muitable(props) {
  const [tableData, setTableData] = useState([])
  useEffect(() => {
    const url = "https://api.publicapis.org/entries"

    const fetchData = async () => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setTableData(data.entries))
      console.log(tableData)
    }
    fetchData()
  }, [])


  //pagination
  // const [currentPage, setCurrentPage] = useState(1)
  // const [postsPerPage, setPostsPerPage] = useState(10)



  return (
    <>
    <Navbar />
    <TableContainer component={Paper} style={{marginTop: 35}} >
      <Table sx={{ minWidth: 700  }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>API</StyledTableCell>
            <StyledTableCell align="center">Link</StyledTableCell>
            <StyledTableCell align="center">Description</StyledTableCell>
            <StyledTableCell align="center">Auth</StyledTableCell>
            <StyledTableCell align="center">Cors</StyledTableCell>
            <StyledTableCell align="center">HTTPS</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData?.map((row) => (
            <StyledTableRow key={row.Link}>
              <StyledTableCell component="th" scope="row">
                {row.API}
              </StyledTableCell>
              <StyledTableCell align="right" ><a href={row.Link} target="_blank" rel="noreferrer">Link</a></StyledTableCell>
              <StyledTableCell align="center">{row.Description}</StyledTableCell>
              <StyledTableCell align="center">{row.Auth}</StyledTableCell>
              <StyledTableCell align="center">{row.Cors}</StyledTableCell>
              <StyledTableCell align="center">{row.HTTPS}</StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      
    </TableContainer>
    
      </>
  );
}