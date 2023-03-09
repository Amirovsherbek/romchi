import Admin from './Catagore/Admin';
import { Suspense,lazy } from 'react';
// import List from './component/list';
import NotFound from './component/error'
import Component from './component/Component';
import Dashboard from './Admin/AdminSRC/Pages/Dashboard/Dashboard'
import {Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Catagore from './Dashboard/Dashboard';
import WindovCat from './window/WindovCat';
import WindovSize from './window/WindovSize';
import Home from './Home/Home';
import PhoneHandle from './component/PhoneNumber';
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
  const [settings,setSettings]=useState({
    menu:1
  })
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
             <Route path="/catagore" element={<Suspense 
             fallback={<Component/>}>
             <Catagore/></Suspense>
            }/>
          <Route path="/windov/price/catagrie" element={
             <Suspense 
             fallback={<Component/>}>
             <WindovCat/></Suspense>}/>
             <Route path="/windov/price/size" element={
             <Suspense 
             fallback={<Component/>}>
             <WindovSize/></Suspense>}/>
          <Route path='/admin' element={<Dashboard dataRes={data} 
            getData={dataChart}/>}/>
          {/* <Route path='/list' element={<List/>}/> */}
          <Route path='/phoneNumber' element={<PhoneHandle/>}/>
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
