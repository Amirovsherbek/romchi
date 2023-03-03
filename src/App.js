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
import Color from './eshik/pages/Color/Color';
import Homes from './eshik/pages/Home/Homes';
import Detail from './eshik/pages/Detail/Detail';
import Category from './eshik/pages/Category/Category';
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
          <Route path="/" element={<Suspense 
             fallback={<Component/>}>
             <Home/></Suspense>
            }/>
          <Route path="/deraza/pirce/calulate" element={
             <Suspense 
             fallback={<Component/>}>
             <Room/></Suspense>}/>
          <Route path='/admin' element={<Dashboard dataRes={data} 
            getData={dataChart}/>}/>
          {/* <Route path='/list' element={<List/>}/> */}
            
          <Route path='/eshik/color' element={<Color/>}/> 
          <Route path='/eshik/homes' element={<Homes/>}/> 
          <Route path='/eshik/detail' element={<Detail/>}/> 
          <Route path='/eshik/category' element={<Category/>}/> 
          <Route path='/admin/hisobot' element={<Admin/>}/>
          <Route path='/map' element={<Maps/>}/>
          <Route path='*' element={<NotFound/>}/>
         
       </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
