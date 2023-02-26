import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header.jsx";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import Chartdashboard from "./Pages/Chart/Chart.jsx";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";

function App() {
  const [dataChart, setDataChart] = useState("");
  const data = (res) => {
    setDataChart(res)
  }

  return (
   <>
   <Header dataRes={data}/>
     <div className="d-flex gap-1">
      <Sidebar/>
      <Routes>
          <Route path="/" element={<Dashboard  getData={dataChart}/>} />
          <Route path="/korxonalar" element={<Chartdashboard getData={dataChart}/>} />
      </Routes>
    </div>
   </>
  );
}

export default App;
