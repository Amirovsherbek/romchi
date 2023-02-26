import Admin from './Catagore/Admin';
import { Suspense,lazy } from 'react';
// import List from './component/list';
import NotFound from './component/error'
import Component from './component/Component';
import Dashboard from './Admin/AdminSRC/Pages/Dashboard/Dashboard'
import {Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Authorion/Login';
import PrivateRoute from './Private/Private';
import Home from './Home/Home';
import Checked from './Authorion/Checked';
import SiginUp from './Authorion/SiginUp';
import {Maps}  from './component/list';
import { useState,useContext,createContext } from 'react';
import './App.css';
export const UserContext = createContext();
const Room = lazy(() => import('./Catagore/room'));
function App() {
  const [dataChart, setDataChart] = useState("");
  const data = (res) => {
    setDataChart(res)
  }
  const [state,setState]=useState({ 
    category: 0, 
    colorNumber: 0, 
    companyId: 0, 
    createAt: 325436547, 
    glassNumber: 0,
     height: 0, 
     shelfSize: 0, 
    type: 0, 
    width: 0,
    beSaved: true,
    phoneNumber: '',
    name: '',
    region:''
    })
  return (
    <div className="App dc-t">
      <UserContext.Provider value={{state}}>
      <Routes>
          {/* <Route path='/' element={<Catagore/>}/> */}
          <Route path="/" element={<PrivateRoute>
             <Suspense 
             fallback={<Component/>}>
             <Home/></Suspense>
            </PrivateRoute>}/>
          <Route path="/pirce/calulate" element={<PrivateRoute>
             <Suspense 
             fallback={<Component/>}>
             <Room/></Suspense>
          </PrivateRoute>}/>
          <Route path='/admin' element={<Dashboard dataRes={data} getData={dataChart}/>}/>
          {/* <Route path='/list' element={<List/>}/> */}
     
          <Route path='/admin/hisobot' element={<Admin/>}/>
          <Route path='/map' element={<Maps/>}/>
          <Route path='*' element={<NotFound/>}/>

          <Route path='/auth' element={<Login/>}/>
          <Route path='/checked' element={<Checked/>}/>
          <Route path='/SiginUp' element={<SiginUp/>}/>
       </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
