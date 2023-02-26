import { useEffect, useState,useContext } from "react"
import { NavLink } from "react-router-dom"
import { Logins } from "../image/image"
import Component from "../component/Component"
import './Login.css'
import { regionData } from '../region/regiondata';
import { UserContext } from "../App"
function SiginUp(){
   const {state,setState,Save}=useContext(UserContext)
   const [auth,setAuth]=useState({
      token:'',
      generateNumber:""
   })
    const [phoneNumber,setPhoneNumber]=useState("")
    const [success,setSuccess]=useState('')
    const [loading,setLoading]=useState(true)
    const [region,setRegion]=useState("Toshkent")
    const baseurl='http://185.217.131.88:8080'
   async function NumberChecked(){
      try{
        await fetch(baseurl+'/sms/4343245366788986756/1')
          .then((res)=>res.json())
          .then(res=>{
               if(res.success){    
                  console.log(res)   
                         
                localStorage.setItem('acces_token',
                JSON.stringify(res.object))
                let x=res.number
                   auth.generateNumber=x.toString()
                   auth.token=res.object
                   setAuth({...auth})
                   localStorage.setItem('checkout',JSON.stringify(auth))
                   SMSpost()
               }
            })  
      }
      catch(error){
         console.log(error + "xatolik")
      }
   }
   function SMSpost(){
      console.log(auth)
      console.log(typeof phoneNumber)
      console.log( phoneNumber)
      try{
         fetch('http://notify.eskiz.uz/api/message/sms/send',{
            method:"POST",
            headers:{
               'Content-Type':'application/json; charset=UTF-8',
                 'Accept':'application/json',
                 'X-Requested-With':'XMLHttpRequest',
                 'Authorization': "Bearer "+auth.token
            },
            body:JSON.stringify({ 
               "mobile_phone": "998"+phoneNumber, 
               "message": "Romchi.uz: Tasdiqlash kodi - "+auth.generateNumber, 
               "from": "4546", 
               "callback_url": "http://0000.uz/test.php" 
           })
         })
      }
      catch(err){
         console.log(err)
      }
   }
   useEffect(()=>{
      localStorage.setItem('checkout',JSON.stringify(auth))
       },[auth])
    return(
        loading ? <div className="Login dc-t">
        <div className="Login-header">
           <img src={Logins.logotip} alt={'logotip'}/>
        </div>
        <div className="Login-body ">
           <div className="login-title">
              <div>Kirish</div>
           </div>
           <div className="Login-number">
           
            <div className=" bb ">
               <div className="dc-t bb-one">
               <input style={{width:"80%"}} type={'text'} className="form-control w-70 h-90" 
                 required onChange={(e)=>{
                  state.name=e.target.value
                  setState({...state})
                 }}
                  placeholder="ism"
               />
               </div>
             
             <div className="dc-t bb-two">
                <img src={Logins.uzbekistan} alt={'uzbekistan'}/>
                <span> +998 </span>
              </div>
            <div className="number-row ">
              <input className="form-control w-100 h-100 " required
               onChange={(e)=>{
                  setPhoneNumber(e.target.value)
                  state.phoneNumber=e.target.value
                  setState({...state})
               }}
              type={'text'} placeholder={' (90) 123 45 67 '}/>
            </div>
            
         </div>
             <div className="region ">
              <div>
             <select name="viloyat" id="viloyat" required  onChange={(e)=>{
               setRegion(e.target.value)
               state.region=e.target.value
                  setState({...state})
              }}>
                <option value="Toshkent">Toshkent shahri</option>
                <option value="Toshkentviloyat">Toshkent viloyat</option>
                <option value="Qashqadaryo">Qashqadaryo viloyat</option>
                <option value="Sirdaryo">Sirdaryo viloyat</option>
                <option value="Jizzax">Jizzax viloyat</option>
                <option value="Samarqand">Samarqand viloyat</option>
                <option value="Surxondaryo">Surxondaryo viloyat</option>
                <option value="Navoiy">Navoiy viloyat</option>
                <option value="Buxoro">Buxoro viloyat</option>
                <option value="Xorazm">Xorazm viloyat</option>
                <option value="qoraqalpoqiston">Qoraqalpog'iston Respublikasi</option>
                <option value="Namangan">Namangan viloyat</option>
                <option value="fagona">Farg'ona viloyat</option>
                <option value="Andijon">Andijon viloyat</option>
             </select>
              </div>
              <div  className="text-right">
             <select name="tuman" id="tuman"  required >
               {
                  regionData.map(item=>item.typeID===region ? <option key={item.id} value={item.value}>
                      {item.value}
                  </option>:"")
               }
             </select>
              </div>
              </div>
          </div>
        </div>
        <div className="Login-footer dc-t">
        <NavLink to={'/auth/sms'} onClick={NumberChecked}  className="btn xxx px-5 link btn-primary py-2" 
           >
               Keyingisi
         </NavLink>
        </div>
  </div>:<Component/>
    )
}
export default SiginUp