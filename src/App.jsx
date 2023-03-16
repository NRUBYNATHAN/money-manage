
import './App.css'
import { Income } from './Income';
import { Expense } from './Expense';
import { Routes,Route, useNavigate } from 'react-router-dom';
import { Home } from './Home';
import { Addincome } from './Addincome';
import { Editincome } from './Editincome';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import { Addexpense } from './Addexpense';
import { Editexpense } from './Editexpense';
export default function App(){
  const navigate=useNavigate()
  return(
    <div>
       <AppBar position="static">
        <Toolbar>

          <Button onClick={()=>navigate("/")} color="inherit">Home</Button>
          <Button onClick={()=>navigate("/incomelist")} color="inherit">Incomes</Button>
          <Button onClick={()=>navigate("/expenselist")} color="inherit">Expenses</Button>
          {/* <Button onClick={()=>navigate("/addincome")} color="inherit">AddMovie</Button>
          <Button onClick={()=>navigate("//editincome/:id")} color="inherit">BasicForm</Button> */}
        
        </Toolbar>
      </AppBar>

                <Routes>
                      <Route  path="/"                  element={<Home />} />
                      <Route  path="/incomelist"        element={<Income/>}/>
                      <Route  path="/expenselist"           element={<Expense />} />
                      <Route  path="/addincome"           element={<Addincome />} />
                      <Route  path="/editincome/:id"           element={<Editincome />} />
                      <Route  path="/addexpense"           element={<Addexpense />} />
                      <Route  path="/editexpense/:id"           element={<Editexpense />} />
                  </Routes>
    </div>
  );
}

