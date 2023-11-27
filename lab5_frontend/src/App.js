import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './login/index';
import CompanyManage from './companyManage';
import Candidate from './candidate';
import ListWork from './listWork';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/company-manage' element={<CompanyManage/>}/>
        <Route path='/candidate' element={<Candidate/>}/>
        <Route path='/list-work' element={<ListWork/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
