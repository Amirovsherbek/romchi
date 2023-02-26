import React, { useEffect, useState } from 'react'
// import Render from '../Render.js';


import "./card.scss"


const Cards = ({title, img, number, colorId}) => {
  const [active, setActive] = useState(false);


  function handleClickItem(name){
    setActive(!active)
    switch(name){
      case "Qo'ng'iroqlar":
        return colorId("colorQ","#001AFF");

      case "Buyurtmalar soni":
        return colorId("colorBs", "#05FF00");

      case "Tashrif buyuruvchilar soni":
        return colorId("colorTbs", "#FF6000");
      
      case "Sinov":
        return colorId("colorS", "#FFD703");
      
      case "To'lo'v qilganlar":
        return colorId("colorTq" , "#05FF00");

      case "Chiqib ketganlar": 
        return colorId("colorCk", "#FF0000");

       default: 
        return "" 
    }
  }



  return (
    <div onClick={() => handleClickItem(title)} className={active ? 'card-item text-center py-4 active-item shadow' : 'card-item text-center py-4 border-dark'}>
        <p className='text-white fs-5'>{title}</p>
        <div className='d-flex align-items-center justify-content-around me-5 mt-2 fw-bold'>
            <img src={img} width={64} alt="" />
            <strong className={title == "Qo'ng'iroqlar" ? "text-primary fs-3" : title === "Buyurtmalar soni" ? "order fs-3" : title === "Tashrif buyuruvchilar soni" ? "user fs-3" : title === "Sinov" ? "text-warning fs-3" : title === "To'lo'v qilganlar" ? "order fs-3" : title === "Chiqib ketganlar" ? "text-danger fs-3" : ""}>{number}</strong>
        </div>
    </div>
  )
}

export default Cards