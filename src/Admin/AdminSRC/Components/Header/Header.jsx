import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from "../../assets/Images/Ai-work.svg"

import "./header.scss"

// const dataMonth = ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'iyul', 'Avgust', 'Sentyabr', 'Oktyabr', 'Noyabr', 'Dekabr'];
const baseURL='http://185.217.131.88:8080'
const Header = ({dataRes}) => {
  const [getData, setGetData] = useState("");
  const [count, setCount] = useState("");
  const [month, setMonth] = useState("");
  useEffect(() => {
    async function GetData(){
      try{
        let {data} = await axios.get(baseURL+`/admin/getHeadOne`)
        console.log(data)
        setGetData(data)
        setCount({chartYear: data.year, chartMonth: data.month})
        setMonth(data)
      }
      catch(err){
        console.log(err)
      }
    }
    GetData()
  }, []);
  
  async function counterDecrement(){
    try {
      let {data} = await axios.get(baseURL+`/admin/getHeadOne/${count.chartYear}/${count.chartMonth-1}`)
      setMonth(data)
      if(count.chartMonth > 1){
        setCount({...count, chartMonth: +count.chartMonth - 1})
      }
    } catch (error) {
      toast("Bu oyda ma'lumotlar yo'q!", {type: "error"})
    }
  }

  async function counterIncrement(){
    try {
      let {data} = await axios.get(baseURL+`/admin/getHeadOne/${count.chartYear}/${count.chartMonth+1}`)
      setMonth(data)
      if(count.chartMonth < 12){
        setCount({...count, chartMonth: +count.chartMonth + 1})
      }
    } catch (error) {
      toast("Bu oyda ma'lumotlar yo'q!", {type: "error"})
    }
  }

  dataRes(count)

  return (
    <header style={{height:'15%'}} className='w-100  d-flex align-items-center '>
       <div className='col-5'>
          <Link to={"/"}><img className='' width={150} src={logo} alt="ai-work logo " /></Link>
       </div>
        <div className='d-flex align-items-center justify-content-start col-7 px-5 gap-2'>
            <div className='d-flex align-items-center col-4 justify-content-between'>
              <button onClick={() => counterDecrement()} className='btn bg-primary py-0'><i className="fa-solid fa-arrow-left text-white"></i></button>
              <strong className='text-white fs-4 mx-3'>{month.monthName}</strong>
              <button onClick={() => counterIncrement()} className='btn bg-primary py-0'><i className="fa-solid fa-arrow-right text-white"></i></button>
            </div>
        </div>
        {/* <div className='col-4 d-lg-none'></div> */}
    </header>
  )
}

export default Header