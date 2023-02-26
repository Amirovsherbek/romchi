import React, { useEffect, useState } from "react";
import Card from "../../Components/Cards/Cards.jsx";
import Sidebar from "../../Components/Sidebar/Sidebar.jsx";
import Header from "../../Components/Header/Header.jsx";
import Linechart from "../../Components/Linechart/Linechart.jsx";
import axios from "axios";

import "./dashboard.scss";

import calls from "../../assets/Images/calls.svg";
import user from "../../assets/Images/users.svg";
import order from "../../assets/Images/cart.svg";
import { toast } from "react-toastify";


const Dashboard = ({getData,dataRes}) => {
  const baseURL='http://185.217.131.88:8080'
  const [card, setCard] = useState([]);
  useEffect(() => {
    async function getTitleCard(){
      if(getData){
        try {
          const {data} = await axios.get(baseURL+`/admin/getHeadOne/${getData.chartYear}/${getData.chartMonth}`)
         console.log(data)
          setCard(data)
        } catch (error) {
          toast("error", {type: "error"})
        }
      }
    }
    getTitleCard()
  }, [getData]);
  
  const [dataChart, setDataChart] = useState({id:"colorQ", color: "#001AFF"});
  const handleCardClick = (id, color) => {
    setDataChart({id, color})
  }

  const [active, setActive] = useState(1);
  const toggleTab = (index, title) => {
    setActive(index)

      switch(title){
        case "Qo'ng'iroqlar":
          return handleCardClick("colorQ","#001AFF");
  
        case "Buyurtmalar soni":
          return handleCardClick("colorBs", "#05FF00");
  
        case "Tashrif buyuruvchilar soni":
          return handleCardClick("colorTbs", "#FF6000");

        default: 
        return "" 
    } 
  }

  return (
    <div style={{width:"100%"}} className="float-container d-flex bg-dark">
    <Header dataRes={dataRes}/>
    <Sidebar/>
      <div className="container " style={{width:'77%',height:'80%'}}>
        <div className="mt-2 ms-4 w-90 d-flex justify-content-between">
            <div onClick={() => toggleTab(1, "Qo'ng'iroqlar")} style={{width:"30%"}} className={active == 1 ? 'card-item text-center py-4 border border-primary shadow' :'card-item text-center py-4 border-dark' }>
                <p className='text-white fs-5'>Qo'ng'iroqlar</p>
                <div className='d-flex align-items-center justify-content-around me-5 mt-2 fw-bold'>
                    <img src={calls} width={64} alt="" />
                    <strong className="text-primary fs-3">{card.calls}</strong>
                </div>
            </div>
            <div onClick={() => toggleTab(2, "Buyurtmalar soni")} style={{width:"30%"}} className={active == 2 ? 'card-item text-center py-4 border border-success shadow' :'card-item text-center py-4 border-dark' }>
                <p className='text-white fs-5'>Buyurtmalar soni</p>
                <div className='d-flex align-items-center justify-content-around me-5 mt-2 fw-bold'>
                    <img src={order} width={64} alt="" />
                    <strong className="order accordio fs-3">{card.buys}</strong>
                </div>
            </div>
            <div onClick={() => toggleTab(3, "Tashrif buyuruvchilar soni")} style={{width:"30%"}} className={active == 3 ? 'card-item text-center py-4 active-item shadow' :'card-item text-center py-4 border-dark' }>
                <p className='text-white fs-5'>Tashrif buyuruvchilar soni</p>
                <div className='d-flex align-items-center justify-content-around me-5 mt-2 fw-bold'>
                    <img src={user} width={64} alt="" />
                    <strong className="visitors fs-3">{card.visitors}</strong>
                </div>
            </div>
            
        </div>

        <Linechart id={dataChart.id} color={dataChart.color} dataItem={card} idCard={active}/>
      </div>
    </div>
  );
};

export default Dashboard;
