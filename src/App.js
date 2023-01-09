import Catagore from './Catagore/catagore';
import Room from './Catagore/room';
import NotFound from './component/error';
import {Routes,Route} from 'react-router-dom'
import './App.css';
function App() {
  return (
    <div className="App dc-t">
       <Routes>
          {/* <Route path='/' element={<Catagore/>}/> */}
          <Route path='/' element={<Room/>}/>
          <Route path='*' element={<NotFound/>}/>
       </Routes>
    </div>
  );
}

export default App;
