import Admin from './Catagore/Admin';
import { Suspense,lazy } from 'react';
import List from './component/list';
import NotFound from './component/error'
import Component from './component/Component';
import {Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Diagramma from './Catagore/Diagrama';
import Sigin from './Sigin/Sigin';
import './App.css';
const Room = lazy(() => import('./Catagore/room'));
function App() {
  return (
    <div className="App dc-t">
       <Routes>
          {/* <Route path='/' element={<Catagore/>}/> */}
          <Route path="/" element={<Suspense 
          fallback={<Component/>}>
         <Room/></Suspense>}/>
          <Route path='/admin' element={<Diagramma/>}/>
          <Route path='/list' element={<List/>}/>
          <Route path='/sigin' element={<Sigin/>}/>
          <Route path='/admin/hisobot' element={<Admin/>}/>
          <Route path='*' element={<NotFound/>}/>
       </Routes>
    </div>
  );
}

export default App;
