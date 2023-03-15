import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {API} from "./global";
// import { useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';

import { useFormik } from "formik";
import * as yup from "yup";
import { useEffect, useState } from 'react';


export function Editincome() {
  
  const { id } = useParams();
  //const data = obj[id];
  const [list, setList] = useState(null);
  useEffect(() => {
    fetch(`${API}/${id}`)
      .then((data) => data.json())
      .then((mvs) => setList(mvs));
  }, [id]);
  console.log(list);
  return(
  
      list ? <EditincomeForm list={list}/> : <h1>loadiing...</h1>
   
  );
}
function EditincomeForm({list}){
  
  const formValidationSchema=yup.object({
    date: yup.string().required(),
    description:yup.string().required(),
    categories:yup.string().required(),
    amount: yup.number().required(),
   },)
  const {handleSubmit,handleChange,handleBlur,values,touched,errors} = useFormik({

    initialValues:{
      date:list.date,
      description:list.description,
      categories:list.categories,
      amount:list.amount
    },

    validationSchema : formValidationSchema,

    onSubmit:(lists)=>{
    console.log("form value",lists);
    ubdateincome(lists);
    }
  });
  

  const navigate=useNavigate();
  const ubdateincome=async (lists)=>{
    
    
      fetch(`${API}/${list._id}`,{
        method:"PUT",
        body:JSON.stringify(lists),
        headers:{"Content-Type": "application/json",},
        
      });
      navigate("/incomelist")
       };

  return (
    <form onSubmit={handleSubmit}>
      <div className='addincome'>
        <h2>Edit Income</h2>
      <TextField  error={touched.date && errors.date} onBlur={handleBlur} name="date" onChange={handleChange} helperText={touched.date && errors.date ? errors.date:null} value={values.date} label="date" variant="outlined" />
      <TextField  error={touched.description && errors.description} name="description" onChange={handleChange} helperText={touched.description && errors.description ? errors.description:null} value={values.description} label="description" variant="outlined" />
      <TextField  error={touched.categories && errors.categories} name="categories" onChange={handleChange} helperText={touched.categories && errors.categories ? errors.categories:null} value={values.categories} label="categories" variant="outlined" />
      <TextField  error={touched.amount && errors.amount} name="amount" onChange={handleChange} helperText={touched.amount && errors.amount ? errors.amount:null} value={values.amount} label="amount" variant="outlined" />
      <Button color="success" type='submit' variant='contained'>save</Button>
      </div>
    </form>
  );
}
