
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";
import {API} from "./global";
export function Addincome() {
  const formValidationSchema=yup.object({
    date: yup.string().required(),
    description:yup.string().required(),
    categories:yup.string().required(),
    amount: yup.number().required(),
    
   },)
  const navigate=useNavigate()
  const {handleChange,values,handleSubmit,touched,errors,handleBlur}=useFormik({
    initialValues:{
      date:"",
      description:"",
      categories:"",
      amount:""

    },
    validationSchema : formValidationSchema,
    onSubmit:(values)=>{
     addincome(values)
     
    }
  
  })
  const addincome=async(values)=>{
   fetch(`${API}/addincome`,{
    method:"POST",
    body:JSON.stringify(values),
    headers:{"Content-Type": "application/json",},
    
  });
  navigate("/incomelist")
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className='addincome'>
        <h2>Add Income</h2>
      <TextField  error={touched.date && errors.date} onBlur={handleBlur} name="date" onChange={handleChange} helperText={touched.date && errors.date ? errors.date:null} value={values.date} label="date" variant="outlined" />
      <TextField  error={touched.description && errors.description} name="description" onChange={handleChange} helperText={touched.description && errors.description ? errors.description:null} value={values.description} label="description" variant="outlined" />
      <TextField  error={touched.categories && errors.categories} name="categories" onChange={handleChange} helperText={touched.categories && errors.categories ? errors.categories:null} value={values.categories} label="categories" variant="outlined" />
      <TextField  error={touched.amount && errors.amount} name="amount" onChange={handleChange} helperText={touched.amount && errors.amount ? errors.amount:null} value={values.amount} label="amount" variant="outlined" />
      <Button type='submit' variant='contained'>submit</Button>
      </div>
    </form>
  );
}
