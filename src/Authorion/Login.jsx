import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { Logins } from "../image/image"
import Component from "../component/Component"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css'
function Login(){
   const [auth,setAuth]=useState({
      token:'',
      generateNumber:"",
   })
    const [phoneNumber,setPhoneNumber]=useState('')
    const [success,setSuccess]=useState('')
    const [loading,setLoading]=useState(true)
   const baseurl='http://185.217.131.88:8080'
   const notify = () => toast.error(" Siz ro'yxatdan o'tishingiz lozim. Uning uchun Ro'yxatdan o'tish tugamasini bosing ", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
      const notify2 = () => toast.error(" Iltimos! Raqamingizni kiriting kiriting ", {
         position: "top-center",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "colored",
         });
   async function checkedPhoneNumber() {
      if(phoneNumber){
         try {
            const response = await fetch("http://185.217.131.88:8080/newCom/checkPhone", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
              },
              body: JSON.stringify({
                phoneNumber:'+998'+phoneNumber
              }),
            });
            if (response.status<500) {
              const data = await response.json();
              if (data.success) {
                NumberChecked();
                setSuccess(data.massage);
                
              }
              else {
                 setSuccess(data.massage);
                 notify()
              }
            } else {
              const errorText = await response.text();
              
            }
          } catch (error) {
            console.error(`Error: ${error}`);
          }
      }
      else {
         notify2()
      }
    }
   async function NumberChecked(){
      try{
        await fetch(baseurl+'/sms/4343245366788986756/1').then((res)=>res.json())
            .then(res=>{
               if(res.success){              
                localStorage.setItem('acces_token',JSON.stringify(res.object))
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
               mobile_phone: "998"+auth.number, 
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
   // useEffect(()=>{
   //    localStorage.setItem('acces_token',auth.token)
   //     },[auth])
    return(
        loading ? <div className="Login dc-t ">
        
        <div className="Login-header">
           <img src={Logins.logotip} alt={'logotip'}/>
        </div>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
             rtl={false}
            pauseOnFocusLoss
            draggable
             pauseOnHover
             theme="colored"
             />
        <div className="Login-body ">
           <div className="login-title">
              <div>Kirish</div>
           </div>
           <div className="Login-number">
              <div className=" bb">
              <div className="dc-t bb-two">
                <img src={Logins.uzbekistan} alt={'uzbekistan'}/>
                <span> +998 </span>
              </div>
              <div className="number-row"><input className="form-control w-100 h-100 "
               onChange={(e)=>{
                 
                  setPhoneNumber(parseInt(e.target.value))
               }}
              type={'number'} placeholder={' (90) 123 45 67 '} />
              </div>
              </div>
               
          </div>
        </div>
        <div className="Login-footer dc-t">
        <button  onClick={checkedPhoneNumber}  className="btn  xxx px-5 link btn-primary py-2" 
           >
               Keyingisi
         </button>
          <div className="w-100 text-center pt-2">
          <span>Siz yangi bo'lsangiz. </span><NavLink to={'/SiginUp'}>Ro'yxatdan o'ting</NavLink>
          </div>
        </div>
  </div>:<Component/>
    )
}
export default Login