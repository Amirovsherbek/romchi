import { useState,useEffect } from "react"
import { Admin_panel } from "../image/image"
import axios from "axios"
// const options = {
//     method: 'GET',
//     url: 'https://quality-porn.p.rapidapi.com/pornstar/list',
//     params: {letter: 'A'},
//     headers: {
//       'X-RapidAPI-Key': '22d184bda1msh0cafb309a3ded33p111193jsn034471851890',
//       'X-RapidAPI-Host': 'quality-porn.p.rapidapi.com'
//     }
//   };
// const options = {
//     method: 'GET',
//     url: 'https://porn-gallery.p.rapidapi.com/pornos/Natasha%20Nice',
//     headers: {
//       'X-RapidAPI-Key': '22d184bda1msh0cafb309a3ded33p111193jsn034471851890',
//       'X-RapidAPI-Host': 'porn-gallery.p.rapidapi.com'
//     }
//   };
  
function Sigin(){
    const [state,setState]=useState({
        show:false,
    })
    const [arr,setArr]=useState([])
    useEffect(()=>{
        // axios.request(options).then(function (response) {
        //     console.log(response.data);
        // }).catch(function (error) {
        //     console.error(error);
        // });
        // axios.request(options).then(function (response) {
        //       setArr(response.data.results[1].images)
        //       console.log(response.data.results[1].images)

           
        // }).catch(function (error) {
        //     console.error(error);
        // });
       
    },[])
    return (
      <div className="float-container w-100  mx-auto text-center ">
          <div className="wrapper rounded-2 pt-2 h-50 mx-auto my-auto" 
            style={{width:'30%',boxShadow:'0px 0px 10px rgba(120, 155, 235, 0.787)'}}>
            <div className="w-50  mx-auto  text-center mb-1"><img className=" w-70 h-70 " src={Admin_panel.logo} alt="logo"/></div>
            <input style={{width:'72%'}} className=" pl-2  mx-auto form-control custom-input my-3" 
            type={"text"} name='login' 
            required placeholder=" Login"/>
            <input style={{width:'63%'}} className="pl-2 d-inline-block mx-auto form-control custom-input my-2" 
            type={state.show ? 'text':'password'} name='password' 
            required placeholder=" Parol"/>
            <svg onClick={()=>{
                state.show=!state.show
                setState({...state})
            }} xmlns="http://www.w3.org/2000/svg" width="26" height="32" className="text-center bg-light mb-2 mx-2 bi bi-eye-slash-fill"  fill="currentColor"  viewBox="0 0 16 16">
              <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"/>
              <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"/>
            </svg> 
            <button className="btn btn-primary d-block mx-auto mt-3 px-5 py-1">Kirish</button>
        </div>
        
        <div  className='row'>
        {/* {
            arr.map((item,index)=>{
               return(
                <div key={index} className='col-4'>
                   <img className="w-100 h-100" src={item} alt='aa'/>
                </div>
               )
            })
        } */}
                   </div>
      </div>
    )
}
export default Sigin      
{/* <div className="card w-100">
                            <div className="card-header">
                                
                            </div>
                          </div> */}