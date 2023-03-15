

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useEffect } from "react";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {API} from "./global";
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
// const income = {
//       id: 1,
//       date: "21/02/2023",
//       description: 'fuel',
//       categories: 'office',
//       amount: 1000
//     };


export function Income() {
  const [incomelist, setIncomelist] =useState([]);

const getincome=()=>{
  fetch(`${API}`)
      .then((data) => data.json())
      .then((list) => setIncomelist(list));
}

  useEffect(() => getincome(), []);
  const deleteMovie = async(id)=>{
   
   await fetch(`${API}/${id}`,{
       method:"DELETE",
     });
     getincome();
   }
  const navigate=useNavigate();
  
  return (
    <div>
      <div className='add'>
      <h2>Income Mangement</h2>
      <Button className='btn' variant="contained" onClick={()=>navigate("/addincome")}>Add Income</Button>
      </div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead className='head'>
          <TableRow>
            {/* <StyledTableCell align='center'>Id</StyledTableCell> */}
            <StyledTableCell align="center">Date</StyledTableCell>
            <StyledTableCell align="center">Description</StyledTableCell>
            <StyledTableCell align="center">Catagories</StyledTableCell>
            <StyledTableCell align="center">Amount</StyledTableCell>
            <StyledTableCell align="center">Other</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody className='body'>
        
          
            {incomelist.map((income) => (
            <StyledTableRow key={income._id}>
              {/* <StyledTableCell component="th" scope="row">
                {income._id}
              </StyledTableCell> */}
              <StyledTableCell align="center">{income.date}</StyledTableCell>
              <StyledTableCell align="center">{income.description}</StyledTableCell>
              <StyledTableCell align="center">{income.categories}</StyledTableCell>
              <StyledTableCell align="center">{income.amount}</StyledTableCell>
              <IconButton  color="primary" onClick={()=>navigate(`/${income._id}`)}><EditIcon/></IconButton> <IconButton color="error"  onClick={()=>deleteMovie(income._id)}> <DeleteIcon /></IconButton>
            </StyledTableRow>
         ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}