


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
import {API1} from "./global"
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



export function Expense() {
  const [expenselist, setExpenselist] =useState([]);

  const getexpense=()=>{
    fetch(`${API1}`)
        .then((data) => data.json())
        .then((list) => setExpenselist(list));
  }
  
    useEffect(() => getexpense(), []);
    const deleteMovie = async(id)=>{
     
     await fetch(`${API1}/${id}`,{
         method:"DELETE",
       });
       getexpense();
     }
    const navigate=useNavigate();
    
  return (
    <div>
       <div className='add'>
      <h2>Expense Mangement</h2>
      <Button variant='contained' onClick={()=>navigate("/addexpense")}>Add expense</Button>
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
        
          
            {expenselist.map((expense) => (
            <StyledTableRow key={expense._id}>
              {/* <StyledTableCell component="th" scope="row">
                {expense._id}
              </StyledTableCell> */}
              <StyledTableCell align="center">{expense.date}</StyledTableCell>
              <StyledTableCell align="center">{expense.description}</StyledTableCell>
              <StyledTableCell align="center">{expense.categories}</StyledTableCell>
              <StyledTableCell align="center">{expense.amount}</StyledTableCell>
              <IconButton color="primary"  onClick={()=>navigate(`/editexpense/${expense._id}`)}><EditIcon/></IconButton> <IconButton color="error" onClick={()=>deleteMovie(expense._id)}><DeleteIcon/></IconButton>
            </StyledTableRow>
         ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}