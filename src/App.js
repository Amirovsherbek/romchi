import Catagore from './Catagore/catagore';
import Room from './Catagore/room';
import Admin from './Catagore/Admin';
import NotFound from './component/error';
import {Routes,Route} from 'react-router-dom'
import TEST from './roms/TEST/test';
import './App.css';
function App() {
  return (
    <div className="App dc-t">
       <Routes>
          {/* <Route path='/' element={<Catagore/>}/> */}
          <Route path='/' element={<Room/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='*' element={<NotFound/>}/>
       </Routes>
    </div>
  );
}

export default App;
