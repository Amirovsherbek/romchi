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
import Message from './Authorion/message';
import SiginUp from './Authorion/SiginUp';
import {Maps}  from './component/list';
import { useState,createContext } from 'react';
import './App.css';
export const UserContext = createContext();
const Room = lazy(() => import('./Catagore/room'));
function App() {
  const [dataChart, setDataChart] = useState("");
  const data = (res) => {
    setDataChart(res)
  }
  const [state,setState]=useState({ 
    category: 1, 
    colorNumber: 1, 
    companyId: 0, 
    createAt: 325436547, 
    glassNumber: 1,
     height: 0, 
     shelfSize: 0, 
    type: 0,
    count:1, 
    width: 0,
    beSaved: true,
    phoneNumber: '',
    name: '',
    region:''
    })
  return (
    <div className="App dc-t">
      <UserContext.Provider value={{state,setState}}>
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
          <Route path='/admin' element={<PrivateRoute><Dashboard dataRes={data} getData={dataChart}/></PrivateRoute>}/>
          {/* <Route path='/list' element={<List/>}/> */}
     
          <Route path='/admin/hisobot' element={<Admin/>}/>
          <Route path='/map' element={<Maps/>}/>
          <Route path='*' element={<NotFound/>}/>
          
          <Route path='/auth' element={<Login/>}/>
          <Route path='/checked' element={<Checked/>}/>
          <Route path='/SiginUp' element={<SiginUp/>}/>
          <Route path='/auth/sms' element={<Message/>}/>
       </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
