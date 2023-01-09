import {useState,useEffect} from 'react'
import Component from '../component/Component';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Buyurtma ,Oyna,Rom,ShelfSizes,Ozbekiston,Type,Catagorie} from '../image/image';
import { GrFormNext ,GrStatusWarning,GrUser} from "react-icons/gr";  
import { AiFillCheckCircle,AiOutlineCloseCircle,AiFillWarning } from "react-icons/ai";
import "../App.css"

function Room(){
   let sms=0;
   const [autothion,setAutothion]=useState({
      typeID:1,
      generateNumber:0,
   })
//    let headers = new Headers();

//   headers.append('Content-Type', 'application/json; charset=UTF-8');
//   headers.append('Accept', 'application/json');
//   headers.append('X-Requested-With', 'XMLHttpRequest');

//   headers.append('Access-Control-Allow-Origin', '*');
//   headers.append('Access-Control-Allow-Credentials', 'true');
//   headers.append('crossorigin', 'true');

//   headers.append('GET', 'POST', 'OPTIONS');
// //   headers.append('mode', 'no-cors');
//   headers.append('Authorization', 'Bearer ' +autothion.token);
   const [resData,setResData]=useState({
      message:"",
      success:false
   })
   const [disablet,setDisablet]=useState(true)
   const [loading,setLoading]=useState(false)
   const [countPage,SetCountPage]=useState(1)
   const shelfSize=[
      {id:1,shelfSize:0},
      {id:2,shelfSize:15},
      {id:3,shelfSize:20},
      {id:4,shelfSize:25},
      {id:5,shelfSize:30},
      {id:6,shelfSize:35},
      {id:7,shelfSize:40},
      {id:8,shelfSize:45},
   ]
   const [data,setData]=useState({ 
      category: 1, 
      colorNumber: 0, 
      companyId: 0, 
      createAt: 325436547, 
      glassNumber: 0,
      height: 0, 
      shelfSize: 25, 
      type: 0, 
      width: 0,
      beSaved: true,
      regionId:"",
      phoneNumber: " ",
      name: "Alisher"
      })
   const state=[
      {
         id:2,
         content:         
            <div className="size dc-t">
                <div className="body dc-t">
                <div className='size-title'>
                   O’lchamlarni kiriting
                </div>
                <div className='size-list'>
                  <label htmlFor="height">Balandligi(sm)</label> 
                  <input type={'number'} name={"height"} id={"height"}
                  onChange={(e)=>{data.height=parseInt(e.target.value);
                      setData({...data})}} placeholder={'sm'}
                  />
                </div>
                 <div className='size-image dc-t'>
                    <div className='arrow'><img style={{width:"8px",height:"225px"}} src={Buyurtma.arrow} alt="" /></div>
                     <img src={Buyurtma.deraza} alt="deraza" />
                     <div className='arrow2'><img style={{width:"8px",height:"225px"}} src={Buyurtma.arrow} alt="" /></div>
                </div>
                <div className='width '>
                      <label htmlFor="height" id={"heights"}>Balandligi(sm)</label> 
                      <label htmlFor="width">Eni(sm)</label> <br />
                      <div className='width-div'>
                      <input type={'number'} name={"height"} id={"height"}
                        onChange={(e)=>{data.height=parseInt(e.target.value);
                       setData({...data})}} placeholder={'sm'}
                      />
                        <input type={'number'} id={"width"} name={"width"}
                          onChange={(e)=>{data.width=parseInt(e.target.value);
                         setData({...data})}} placeholder={'sm'}/>
                        <div>
                        <button >Plastic (PVX)</button>
                        </div>
                      </div>
                   </div>
                </div>
                <div className='dc-t footer'>
                  <div id="change-page">
                     <button onClick={()=>Nextpage("prev")}><GrFormNext/></button>
                     <button onClick={()=>Nextpage("next")}><GrFormNext/></button>
                  </div>
                </div>
            </div>
      },
      {
         id:3,
         content:<div className="color dc-t">
            <div className="body">
            <div className='deraza-image dc-t'>
               <img src={Buyurtma.deraza} alt="deraza" />
              </div>
              <div className='color-title'>Romni rangini tanlang</div>
              <div className='rom-color dc-t'>
                  {
                    Rom.map(item=>{
                     return (
                        <div className="rom-color-div" key={item.id} 
                        onClick={()=>{
                           
                           NumberChecked("rom",item.id)
                        }}>
                           <img src={item.image} alt={item.title} />
                           <br />
                           <span>{item.title}</span>
                        </div>
                     )
                    })
                  }
              </div>
              <div className='color-title'>Oynani rangini tanlang</div>
              <div className='rom-color dc-t'>
              {
                    Oyna.map(item=>{
                     return (
                        <div className="rom-color-div" key={item.id} onClick={()=>NumberChecked("oyna",item.id)}>
                           <img src={item.image} alt={item.title} />
                           <br />
                           <span>{item.title}</span>
                        </div>
                     )
                    })
                  }
              </div>
            </div>
             <div className='dc-t footer'>
               <div  id="change-page">
                  <button onClick={()=>Nextpage("prev")}><GrFormNext/></button>
                  <button onClick={()=>Nextpage("next")}><GrFormNext/></button>
               </div>
             </div>
         </div>
      },
      {
         id:1,
         content:<div className='list-rom dc-t'>
            <div className="body dc-t">
            <div className='deraza-image dc-t'>
               {
                 Type.map(item=>{
                  if(item.Typeid===autothion.typeID){
                     return (
                        <img key={item.id} src={item.image} alt={item.alt}/>
                     )
                  }
                 })
               }
              
            </div>
              <div className='color-title'>Romni rangini tanlang</div>
              <div className="list-checked dc-t">
               <div className=" dc-t" style={{ width: "100%",height: "50%"}}>
                    {
                       Type.map(item=>{
                          return (
                             <div key={item.Typeid} className={autothion.typeID===item.Typeid ? "list-checkeds-active":"list-checkeds"}
                              onClick={()=>{autothion.typeID=item.Typeid
                              setAutothion({...autothion})}} >
                                <img  src={item.image} alt={item.Typeid} />
                             </div>
                          )
                       })
                    }
               </div>
               <div className="list-checked-cat">
               {
                 Catagorie.filter(item=>item.Typeid===autothion.typeID)
                .map(item=>{
                     return (
                        <div key={item.id} className={data.category===item.id ? "list-checkeds-active":"list-checkeds"}
                         onClick={()=>Catagoriya(item.id)} >
                           <img  src={item.image} alt={item.alt} />
                        </div>
                     )
                  })
               }
               </div>
              </div>
            </div>
              <div className='dc-t footer'>
               <div id="change-page">
                  <div className="count">
                     <label htmlFor="soni">Soni</label><br />
                     <input type={'number'} 
                     placeholder={"0"}
                     onChange={(e)=>{
                        data.count=parseInt(e.target.value)
                     }}
                     />
                  </div>
                  <button onClick={()=>Nextpage("next")}><GrFormNext/></button>
               </div>
             </div>
         </div>
      },
      {
         id:4,
         content:<div className='tokcha dc-t'>
             <div className="body dc-t">
               <div className='tokcha-title dc-t'><span>Tokcha uzunligi avtomatik 
                  hisoblanadi</span>
               </div>
               <div className="tokcha-image dc-t">
                 <img src={ShelfSizes} alt="tokcha" />
               </div>
               <div className="qalinlig dc-t">
                  {
                     shelfSize.map(item=>{
                       return (
                        <div key={item.id} 
                        className={data.shelfSize===item.shelfSize ? "qalinlig-div-activ":"qalinlig-div"}
                        onClick={()=>ShelfSize(item.shelfSize)}>{item.shelfSize}</div>
                       )
                     })
                  }
               
              </div>
              <div className="hudud">
               <label htmlFor="hudud">Hududingizni tanlang</label>
               <select name="hudud" id="hudud" onChange={(e)=>{data.regionId=e.target.value
               setData({...data})
               }}>
               <option value="Toshkent">Toshkent shahri</option>
                      <option value="Toshkent">Toshkent viloyat</option>
                      <option value="Qashqadaryo">Qashqadaryo viloyat</option>
                      <option value="Sirdaryo">Sirdaryo viloyat</option>
                      <option value="Jizzax">Jizzax viloyat</option>
                      <option value="Samarqand">Samarqand viloyat</option>
                      <option value="Surxondaryo">Surxondaryo viloyat</option>
                      <option value="Navoiy">Navoiy viloyat</option>
                      <option value="Buxoro">Buxoro viloyat</option>
                      <option value="Xorazm">Xorazm viloyat</option>
                      <option value="Qoraqalpog'iston">Qoraqalpog'iston Respublikasi</option>
                      <option value="Namangan">Namangan viloyat</option>
                      <option value="Farg'ona">Farg'ona viloyat</option>
                      <option value="Andijon">Andijon viloyat</option>
               </select>
              </div>
             </div>
              <div className='dc-t footer'>
               <div id="change-page">
               <button onClick={()=>Nextpage("prev")}><span><GrFormNext/></span></button>
                  <button onClick={()=>Nextpage("next")}><span><GrFormNext/></span></button>
               </div>
             </div>
         </div>
      },
      {
      id:5,
      content:<div className='zakas dc-t'>
         <div className="ogohlantirish">
            <div className="icon-box">
               <span><GrStatusWarning/></span>
            </div>
            <div  className='ogohlantirish-title'>
               <div>
                  Siz bilan bog’lanishimiz 
                  uchun raqamingizni  qoldiring
               </div>
            </div>
         </div>
         <div>
         <span className='user-icon'><GrUser/></span>
         <input type="text" className='name-users' onChange={(e)=>{
            data.name=e.target.value 
            setData({...data}) 
         }}
         placeholder={" Ism"}
         />   
         </div>   
            <div className="uzb-box">
               <div>
                 <img src={Ozbekiston} alt="uzb" />
                 <b>+998</b>
               </div>
               <input type={'tel'} onChange={(e)=>{
                  data.phoneNumber=e.target.value
                  setData({...data}) 
               }} placeholder={"9* *** ** **"}/>
            </div>
        
         <button className='nextPage' disabled={disablet} onClick={Requred}>Keyingisi</button>
      </div>
      },
      {
         id:7,
         content:<div className='zakas dc-t'>
            <div className="qabul">
               <div className="icon-box-qabul">
                  <span><AiFillCheckCircle/></span>
               </div>
               <div  className='ogohlantirish-title-qabul'>
                  <div>
                  Arizangiz qabul qilindi,
                   tez orada siz bilan bog’lanamiz
                  </div>
               </div>
            </div>
           
            <button className='nextPage' onClick={()=>{SetCountPage(1)}}>Bosh sahifa</button>
         </div>
      },
      {
         id:6,
         content:<div className='zakas dc-t'>
            <div className="ogohlantirish">
               
               <div  className='ogohlantirish-title'>
                  <div>
                  Raqamingizni tasdiqlash 
                   uchun SMS orqali kelgan kodni kiriting.
                  </div>
                  <input type="text" className='name-users' onChange={(e)=>{
                   sms=parseInt(e.target.value) }}
                   placeholder={"* * * * *"}/>
               </div>
            </div>
           
            <button className='nextPage' onClick={Submit}>Keyingisi</button>
         </div>
      },
      {
         id:8,
         content:<div className='zakas warning dc-t'>
            <div className="ogohlantirish-warning">
               <div className="icon-box-warning">
                  <span ><AiOutlineCloseCircle/></span>
               </div>
               <div  className='ogohlantirish-title-warning'>
                  <div>
                     SMS kodni xato kiriting qayta kiritib ko'ring
                  </div>
               </div>
            </div>
           
            <button className='nextPage' onClick={()=>{SetCountPage(6)}}>Qayta sms kodini kiritish</button>
         </div>
      },
      {
         id:9,
         content:<div className='zakas dc-t'>
            <div className="ogohlantirish-error">
               <div className="icon-box-error">
                  <span style={{color:'red'}} className='error'><AiOutlineCloseCircle/></span>
               </div>
               <div  className='ogohlantirish-title-error'>
                  <div className='error' >
                    Sizda tarmoq o'chib qolgan bo'lishi mumkin 
                    tarmoqda uzilish
                  </div>
               </div>
            </div>
           
            <button className='nextPage' onClick={()=>{SetCountPage(5)}}>Qayta urinish</button>
         </div>
      },

   ]
   const disable=()=>{
        if(data.phoneNumber.length===9 ){
         setDisablet(false)
        }
        else if(data.phoneNumber.length<9 || data.phoneNumber.length>12){
         setDisablet(true)
        }
        
   }
   function Nextpage(id){
      if(id==="next" ){
         SetCountPage(page=>page+1)
      } 
      else if(id==="prev" ){
         SetCountPage(page=>page-1)
      }
   }
    function Submit(){
       if(sms===autothion.generateNumber){
         // http://aiwork.uz
         //http://185.217.131.88:8080
        fetch('http://185.217.131.88:8080/ariza/register',{
         method:"POST",
         body:localStorage.getItem("buyurtma_page"),
        headers:{  'Content-Type':'application/json; charset=UTF-8',
        'Accept':'application/json',
        'X-Requested-With':'XMLHttpRequest',
        "Access-Control-Allow-Origin": "*",
      //   "Access-Control-Allow-Methods": "GET,POST",
      //   "Access-Control-Allow-Headers":" Content-Type",
      //   "mode":"no-cors",
            }
        })
        .then((response) => response.json())
          .then((data) => {             
            if(data){
             
               resData.message=data.massage;
               resData.success=data.success;
               setResData({...resData})
               if(resData.success){
                Nextpage("next")  
                localStorage.clear()
               }
            }
          })
          .catch((err) => {
            console.log(err.message)
            return(
               <div style={{width:'100%',height:"100vh",display:"flex",flexWrap:"wrap", justifyContent:"center",alignItems:"center" }}>
                       <h1 style={{width:"100%",textAlign:"center",height:'20%'}}>{err.message}</h1>
                       <div style={{width:"100%",textAlign:"center",height:'80%'}} >qayta urinib ko'ring</div>     
                   </div>
            )
          });
       }
       else{SetCountPage(8)}
   }
   function NumberChecked(color,id){
     if(color==="rom"){
      data.colorNumber=id;
      setData({...data})
     }
     else if(color==='oyna'){
      data.glassNumber=id;
      setData({...data})
     }
   }
   function Catagoriya(id){
      data.category=id
      setData({...data})
   }
   function ShelfSize(id){
      data.shelfSize=id
      setData({...data})
   }
   function Requred(){
     fetch('http://185.217.131.88:8080/ariza/checkPhone', {
         method: 'POST',
         body: JSON.stringify({
           // Add parameters here
        phoneNumber:data.phoneNumber
         }),
         headers:{  'Content-Type':'application/json; charset=UTF-8',
         'Accept':'application/json',
         'X-Requested-With':'XMLHttpRequest',
         "Access-Control-Allow-Origin": "*",
         // "Access-Control-Allow-Methods": "GET,POST,OPTION",
         
         // "mode":"no-cors",
            }
       })
          .then((response) => response.json())
          .then((data) => {
            setLoading(true)
            
             if(data.success){
          
               Requreds()
               setLoading(false)
               setTimeout(()=>{setLoading(true)
               },1200)
               SetCountPage(prev=>prev+1)
             }
             else if(!data.success){
               notify()
             }
             
             // Handle data
          })
          .catch((err) => {
            SetCountPage(9)
            console.log(err)
          });
          
   }
   function Requreds(){
      fetch('http://185.217.131.88:8080/sms/4343245366788986756/1', {
         method: 'GET',
         headers:{ 
            // 'Content-Type':'application/json; charset=UTF-8',
            //          'Accept':'application/json',
            //      'X-Requested-With':'XMLHttpRequest'
            //        'Access-Control-Allow-Origin':'*',
            //   'Access-Control-Allow-Credentials':'true',
            //   'crossorigin':'true'
            }
       })
          .then((response) => response.json())
          .then((data) => {
           
            if(data.success){
            // autothion.token=data.object;
             autothion.generateNumber=data.number;
            localStorage.setItem("token",data.object)
            setAutothion({...autothion})
              req()
            }
            else {
              console.log("error")
             
            }
             // Handle data
          })
          .catch((err) => {
             console.log(err.message)  ;
          });
   }
   function req(){
      fetch('http://notify.eskiz.uz/api/message/sms/send', {
         method: 'POST',
         body: JSON.stringify({
           // Add parameters here         
          mobile_phone: "998"+data.phoneNumber,
          message: "GulBazar.uz: Tasdiqlash kodi - "+autothion.generateNumber,
          from: "4546",
          callback_url: "http://0000.uz/test.php"
         }),
         headers:{ 'Content-Type':'application/json; charset=UTF-8',
                 'Accept':'application/json',
                 'X-Requested-With':'XMLHttpRequest',
                 "Access-Control-Allow-Origin": "*",
               //   "Access-Control-Allow-Methods": "POST",
               //   "Access-Control-Allow-Headers":" Content-Type, Authorization",
               //   "mode":"no-cors",
                 'Authorization':'Bearer ' +localStorage.getItem("token")
               }
       })
          .then((response) => response.json())
          .then((data) => {
             
             // Handle data
          })
          .catch((err) => {
             console.log(err.message);
          });
   }
   const notify = () => toast("Bu  raqamdan ariza qabul qilingan,iltimos boshqa raqam kiriting");
   useEffect(()=>{
     setLoading(!loading); 
   },[])
  useEffect(()=>{
    localStorage.setItem("buyurtma_page",JSON.stringify(data))
    disable()
   },[data])
   return (
        <div className='deraza dc-t'>
          <ToastContainer />
          {
            loading ? <div className="deraza-child">
            <header>
             <div  className={'logo'}>
                <img onClick={()=>SetCountPage(1)} src={Buyurtma.logotip} alt="Logo" />
             </div>
            </header>
         {
            state.map(item=>{
               if(countPage===item.id){
                  return (
                     <div key={item.id}>
                        {item.content}
                     </div>
                  )
               }
            })
         }
          </div>:<Component/>
          }
        </div>
    )
}
export default Room;