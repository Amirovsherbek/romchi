import { useState } from "react"
import { json, NavLink } from "react-router-dom"
import { login } from "../image/image"
import './Login.css'
function Message(){
   const [message,setMessage]=useState('')
   function Checked(){
      if(message===JSON.parse(localStorage.getItem('checkout')).generateNumber){
         let y=JSON.parse(localStorage.getItem('checkout')).token
         window.open('/')
         localStorage.setItem('acces_token',JSON.stringify(y))
      }
      else{
         console.log('xatolik')
      }
   }
   return(
        <div className="Login dc-t">
              <div className="Login-header">
                 <img src={login.logotip} alt={'logotip'}/>
              </div>
              <div className="Login-body ">
                 <div className="Login-number-sms ">
                       <div className="w-100 mb-4 ">SMS kodni kiriting</div>
                       <div>
                          <input className="form-control w-100 text-center"
                          type={'text'} placeholder={' 0-0-0-0-0 '}
                             onChange={(e)=>setMessage(e.target.value)}
                          />
                       </div>
                 </div>
              </div>
              <div className="Login-footer dc-t">
                 <button style={{width:'150px'}} onClick={Checked} 
                 className="btn btn-primary py-2" 
                 >Keyingisi</button>
              </div>
        </div>
    )
}
export default Message