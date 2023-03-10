import {NavLink}  from 'react-router-dom'
import {useState,useEffect,useContext} from 'react'
import Component from '../component/Component';
import PhoneHandle from '../component/PhoneNumber';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import ReactSimplyCarousel from 'react-simply-carousel';
import { Buyurtma ,Oyna,Rom,ShelfSizes,Ozbekiston,Type,Catagorie} from '../image/image';
import "../App.css"
import { UserContext } from '../App';
function Room(){
   const baseurl='http://185.217.131.88:8080'
   const {state,setState,Save}=useContext(UserContext)
   const [autothion,setAutothion]=useState({
      typeID:1,
      generateNumber:0,
   })
   const [activeSlideIndex, setActiveSlideIndex] = useState(0);
   const [images,setImage]=useState([])
   const [disablet,setDisablet]=useState(true)
   const [loading,setLoading]=useState(true)
   const [countPage,SetCountPage]=useState(1)
   const shelfSize=[
      {id:1,shelfSize:0,value:"X"},
      {id:2,shelfSize:15,value:"15"},
      {id:3,shelfSize:20,value:"20"},
      {id:4,shelfSize:25,value:"25"},
      {id:5,shelfSize:30,value:"30"},
      {id:6,shelfSize:35,value:"35"},
      {id:7,shelfSize:40,value:"40"},
      {id:8,shelfSize:45,value:"45"},
   ]
   const [data,setData]=useState({ 
      category: 1, 
      colorNumber: 1, 
      companyId: 0, 
      createAt: 325436547, 
      glassNumber: 1,
      height: 0, 
      shelfSize: 25, 
      type: 0, 
      width: 0,
      beSaved: true,
      regionId:"",
      phoneNumber: " ",
      name: "",
      count:1
   })
   const State=[
      {
         id:1,
         content:<div className='list-rom dc-t'>
            <div className="body dc-t">
            <div className='Deraza-image '>      
      <ReactSimplyCarousel
      style={{backgroundColor:"red"}}
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        containerProps={{
         style:{
            width:360,
            display:"flex",
            flexWrap:"nowrap"
         }
        }}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            height: 25,
            textAlign: 'right',
            width: 25,
            marginLeft:"7px"
          },
          className:"next",
          children: <span style={{width:"25px",height:"25px"}}><img className='img' src={Buyurtma.catnext}/></span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 25,
            lineHeight: 1,
            textAlign: 'left',
            width: 25,
            marginRight:"7px"
          },
          className:"back",
          children: <span style={{width:"25px",height:"25px",transform: "rotate(180deg)"}}><img className='img' src={Buyurtma.catnext}/></span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 1,
            itemsToScroll: 1,
          },
        ]}
        speed={400}
        easing="ease-in-out"
      >
      {
                 Catagorie.filter(item=>item.Typeid===autothion.typeID).map(item=>{ 
                return (  <div key={item.id} className='Deraza-image-img'>
                  <LazyLoadImage 
                      alt={item.alt}
                      effect="blur"
                      onClick={()=>Catagoriya(item.id)}
                      className={state.category===item.id ? "deraza-image-img deraza-active":"deraza-image-img"}
                      src={item.image} 
                     //  style={{width:'300px',height:'300px'}}
                      /> 
                  </div>)})
            }
      </ReactSimplyCarousel>            
            </div>
             <div className="list-checked ">
             <div className='color-titles'>Romni shaklini tanlang</div>
               <div className=" dc-t" style={{ width: "100%",height: "80%"}}>
                    {
                       Type.map(item=>{
                          return (
                             <div key={item.Typeid} className={autothion.typeID===item.Typeid ? "List-checkeds-active":"List-checkeds"}
                              onClick={()=>{autothion.typeID=item.Typeid
                              setAutothion({...autothion}) 
                              }} >
                                  <LazyLoadImage key={item.id}
                                      alt={item.Typeid}
                                      effect="blur"
                                      src={item.image} 
                                       />
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
                     placeholder={"1"}
                     onChange={(e)=>{
                        state.count=parseInt(e.target.value)
                        setState({...state})
                     }}
                     />
                  </div>
                  <button onClick={()=>Nextpage("next")}>
                      <img src={Buyurtma.nextpage} alt="next" loading='lazy' />
                  </button>
               </div>
             </div>
         </div>
      },
      {
         id:2,
         content:         
            <div className="size dc-t">
                <div className="body dc-t">
                <div className='size-title dc-t'>
                   O???lchamlarni kiriting
                </div>
                <div className='size-list'>
                  <label htmlFor="height">Balandligi(sm)</label> 
                  <input type={'number'} name={"height"} id={"height"}
                  onChange={(e)=>{state.height=parseInt(e.target.value);
                      setState({...state})}} placeholder={'sm'}
                  />
                </div>
                 <div className='size-image dc-t'>
                    <div className='arrow'><img style={{width:"8px",height:"280px"}} src={Buyurtma.arrow} alt="" /></div>
                      <div className="size-box-image">
                      {
                 Catagorie.map(item=>item.id===state.category ? <LazyLoadImage key={item.id}
                                      alt={item.alt}
                                      effect="blur"
                                      className='deraza-image-img'
                                      src={item.image} 
                                       />:"")
               }
                      </div>
                     <div className='arrow2'><img style={{width:"8px",height:"280px"}} src={Buyurtma.arrow} alt="" /></div>
                </div>
                <div className='width '>
                      <div className='with-label'>
                      <label htmlFor="height" >Balandligi(sm)</label> 
                      <label htmlFor="width">Eni(sm)</label> <br />
                      </div>
                      <div className='width-div'>
                      <input type={'number'} name={"height"} id={"height"}
                        onChange={(e)=>{state.height=parseInt(e.target.value);
                       setState({...state})}} placeholder={'sm'}
                      />
                        <input type={'number'} id={"width"} name={"width"}
                          onChange={(e)=>{state.width=parseInt(e.target.value);
                         setState({...state})}} placeholder={'sm'}/>
                        <div>
                        <button >Plastic (PVX)</button>
                        </div>
                      </div>
                </div>
                </div>
                <div className='dc-t footer'>
                  <div id="change-page">
                     <button onClick={()=>Nextpage("prev")} style={{color:"white"}}><img src={Buyurtma.nextpage} alt="nextpage"/></button>
                     <button onClick={()=>Nextpage("next")}><img src={Buyurtma.nextpage} alt="nextpage"/></button>
                  </div>
                </div>
            </div>
      },
      {
         id:3,
         content:<div className="color dc-t">
            <div className="body">
            <div className='deraza-image dc-t'>
            <div className='deraza-image dc-t'>
               {
                 Catagorie.map(item=>item.id===state.category ?  <img className='deraza-image-img' key={item.id} src={item.image} alt={item.alt}/>:"")
                }
            </div>
              </div>
              <div className='color-title'>Romni rangini tanlang</div>
              <div className='rom-color dc-t'>
                  {
                    Rom.map(item=>{
                     return (
                        <div className='rom-color-div'
                        key={item.id} 
                        onClick={()=>{
                           NumberChecked("rom",item.id)
                        }}><span className={state.colorNumber===item.id ? "actives":"no-actives"}>
                           <img src={Buyurtma.success} alt="" /></span>
                           <img className={state.colorNumber===item.id ? "rom-color-img-active":"rom-color-div-img"}
                            src={item.image} alt={item.title} />
                           <br />
                           <div>{item.title}</div>
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
                        <div className='rom-color-div'
                        key={item.id} 
                        onClick={()=>{
                           NumberChecked("oyna",item.id)
                        }}><span className={state.glassNumber===item.id ? "actives":"no-actives"}>
                           <img src={Buyurtma.success} alt="" /></span>
                           <img className={state.glassNumber===item.id ? "rom-color-img-active":"rom-color-div-img"}
                            src={item.image} alt={item.title} />
                           <br />
                           <div>{item.title}</div>
                        </div>
                     )
                    })
                  }
              </div>
            </div>
             <div className='dc-t footer'>
               <div  id="change-page">
                  <button onClick={()=>Nextpage("prev")}><img src={Buyurtma.nextpage} alt="nextpage"/></button>
                  <button onClick={()=>Nextpage("next")}><img src={Buyurtma.nextpage} alt="nextpage"/></button>
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
                        className={state.shelfSize===item.shelfSize ? "qalinlig-div-activ":"qalinlig-div"}
                        onClick={()=>ShelfSize(item.shelfSize)}>{item.value}</div>
                       )
                     })
                  }
               
              </div>
              <div className="hudud">
               <label htmlFor="hudud">Hududingizni tanlang</label>
               <select name="hudud" id="hudud" onChange={(e)=>{state.region=e.target.value
               setState({...state})
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
               <button onClick={()=>Nextpage("prev")}><img src={Buyurtma.nextpage} alt="nextpage"/></button>
                  <button onClick={()=>Nextpage("next")}><img src={Buyurtma.nextpage} alt="nextpage"/></button>
               </div>
             </div>
         </div>
      },
      {
      id:5,
      content:<div className='zakas dc-t'>
         <div className="ogohlantirish">
            <div className="icon-box">
               <span style={{width: "50px",height: "50px",borderRadius:'50%',border:"3px solid #ffffff",
               backgroundColor:"#03C3EC",fontSize:"36px",fontWeight:"500",color:"#ffffff"}} 
               className={"dc-t"}>i</span>
            </div>
            <div  className='ogohlantirish-title'>
               <div>
                  Siz bilan bog???lanishimiz 
                  uchun raqamingizni  qoldiring
               </div>
            </div>
         </div>
         <div>
        
         <input type="text" className='name-users' onChange={(e)=>{
            state.name=e.target.value 
            setState({...state}) 
         }}
         placeholder={" Ism"}
         />   
         </div>   
            <div className="uzb-box">
               <div>
                 <img src={Ozbekiston} alt="uzb" />
                 <b>+998</b>
               </div>
                <PhoneHandle />
            </div>
        
         <button className='nextPage'  onClick={Requred}>Keyingisi</button>
      </div>
      },
      {
         id:7,
         content:<div className='zakas dc-t'>
            <div className="qabul">
               <div className="icon-box-qabul">
                  <span><img src={Buyurtma.success} alt="success" /></span>
               </div>
               <div  className='ogohlantirish-title-qabul'>
                  <div>
                  Ma???lumotlar qabul qilindi,
                   tez orada siz bilan bog???lanamiz
                  </div>
               </div>
            </div>
           
            <button className='nextPage' onClick={()=>{SetCountPage(1)}}>Bosh sahifa</button>
         </div>
      },
      {
         // id:6,
         content:<div className='zakas dc-t'>
            <div className="ogohlantirish">
              <div  className='ogohlantirish-title'>
                  <div>
                   Raqamingizni tasdiqlash 
                   uchun SMS orqali kelgan kodni kiriting.
                  </div>
                  <input style={{textAlign:"center",marginTop:"10px"}} type="text" className='name-users' 
                  // onChange={(e)=>{
                  //  sms=parseInt(e.target.value) }}
                  //  placeholder={"* * * * *"}
                  />
               </div>
            </div>
           
            <button className='nextPage'  onClick={Submit}>Keyingisi</button>
         </div>
      },
      {
         id:8,
         content:<div className='zakas warning dc-t'>
            <div className="ogohlantirish-warning">
               <div className="icon-box-warning">
               <span className={"dc-t"}>i</span>
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
                  <span  className='dc-t'>i</span>
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
      if(data.category!==0){
         if(id==="next" ){
            SetCountPage(page=>page+1)
         } 
         else if(id==="prev" ){
            SetCountPage(page=>page-1)
         }
      }
   }
    function Submit(){
            // http://aiwork.uz
         //http://185.217.131.88:8080
         fetch('http://185.217.131.88:8080/ariza/register',{
            method:"POST",
            body:JSON.stringify(state),
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
               setLoading(true)
                 localStorage.removeItem("buyurtma_page")
               SetCountPage(7)
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
   function NumberChecked(color,id){
      let baseURL= 'http://185.217.131.88:8080/attachment/open/'
     if(color==="rom"){
      state.colorNumber=id;
      setState({...state})
      let datas=[]
      if(autothion.typeID===1){
         if(state.colorNumber===1){
            datas=  Catagorie.filter(item=>item.id===state.category )
            .map(item=>{
               item.image=baseURL+item.id
               return item
              })
         }
         if(state.colorNumber===2){
            datas=  Catagorie.filter(item=>item.id===state.category )
            .map(item=>{
               item.image=baseURL+(item.id+32)
               return item
              })
         }
         if(state.colorNumber===3){
            datas= Catagorie.filter(item=>item.Typeid===autothion.typeID )
             .map(item=>{
                item.image=baseURL+(item.id+64)
                return item
               })
          }
          if(state.colorNumber===4){
            datas= Catagorie.filter(item=>item.Typeid===autothion.typeID )
             .map(item=>{
                item.image=baseURL+(item.id+96)
                return item
               })
          }
      }
      if(autothion.typeID===2){
         if(state.colorNumber===1){
            datas=  Catagorie.filter(item=>item.id===state.category )
            .map(item=>{
               item.image=baseURL+(item.id+4)
               return item
              })
         }
         if(state.colorNumber===2){
            datas=  Catagorie.filter(item=>item.id===state.category )
            .map(item=>{
               item.image=baseURL+(item.id+32+4)
               return item
              })
         }
         if(state.colorNumber===3){
            datas= Catagorie.filter(item=>item.Typeid===autothion.typeID )
             .map(item=>{
                item.image=baseURL+(item.id+64+4)
                return item
               })
          }
          if(state.colorNumber===4){
            datas= Catagorie.filter(item=>item.Typeid===autothion.typeID )
             .map(item=>{
                item.image=baseURL+(item.id+96+4)
                return item
               })
          }
      }
      if(autothion.typeID===3){
         if(state.colorNumber===1){
            datas=  Catagorie.filter(item=>item.id===state.category )
            .map(item=>{
               item.image=baseURL+(item.id+10)
               return item
              })
         }
         if(state.colorNumber===2){
            datas=  Catagorie.filter(item=>item.id===state.category )
            .map(item=>{
               item.image=baseURL+(item.id+32+10)
               return item
              })
         }
         if(state.colorNumber===3){
            datas= Catagorie.filter(item=>item.Typeid===autothion.typeID )
             .map(item=>{
                item.image=baseURL+(item.id+64+10)
                return item
               })
          }
          if(state.colorNumber===4){
            datas= Catagorie.filter(item=>item.Typeid===autothion.typeID )
             .map(item=>{
                item.image=baseURL+(item.id+96+10)
                return item
               })
          }
      }
      setImage([...datas])  
    
   }


     else if(color==='oyna'){
      state.glassNumber=id;
      setState({...state})
      let datas=[]
      if(autothion.typeID===1){
         if(state.colorNumber===1){
            if(state.glassNumber===1 ){
               datas=  Catagorie.filter(item=>item.id===state.category )
               .map(item=>{
                  item.image=baseURL+item.id
                  return item
                 })
            }
            if(state.glassNumber===2){
               datas=  Catagorie.filter(item=>item.id===state.category )
               .map(item=>{
                  item.image=baseURL+(item.id+4)
                  return item
                 })
            }
         }
         if(state.colorNumber===2){
            if(state.glassNumber===1 ){
               datas=  Catagorie.filter(item=>item.id===state.category )
               .map(item=>{
                  item.image=baseURL+(item.id+32)
                  return item
                 })
            }
            if(state.glassNumber===2){
               datas=  Catagorie.filter(item=>item.id===state.category )
               .map(item=>{
                  item.image=baseURL+(item.id+36)
                  return item
                 })
            }
         }
         if(state.colorNumber===3){
            if(state.glassNumber===1 ){
               datas=  Catagorie.filter(item=>item.id===state.category )
               .map(item=>{
                  item.image=baseURL+(item.id+64)
                  return item
                 })
            }
            if(data.glassNumber===2){
               datas=  Catagorie.filter(item=>item.id===data.category )
               .map(item=>{
                  item.image=baseURL+(item.id+68)
                  return item
                 })
            }
         }
         if(state.colorNumber===4){
            if(state.glassNumber===1 ){
               datas=  Catagorie.filter(item=>item.id===state.category )
               .map(item=>{
                  item.image=baseURL+(item.id+96)
                  return item
                 })
            }
            if(state.glassNumber===2){
               datas=  Catagorie.filter(item=>item.id===state.category )
               .map(item=>{
                  item.image=baseURL+(item.id+100)
                  return item
                 })
            }
         }
      }
      if(autothion.typeID===2){
         if(state.colorNumber===1){
            if(state.glassNumber===1 ){
               datas=  Catagorie.filter(item=>item.id===state.category )
               .map(item=>{
                  item.image=baseURL+(item.id+4)
                  return item
                 })
            }
            if(state.glassNumber===2){
               datas=  Catagorie.filter(item=>item.id===state.category )
               .map(item=>{
                  item.image=baseURL+(item.id+10)
                  return item
                 })
            }
         }
         if(state.colorNumber===2){
            if(state.glassNumber===1 ){
               datas=  Catagorie.filter(item=>item.id===state.category )
               .map(item=>{
                  item.image=baseURL+(item.id+36)
                  return item
                 })
            }
            if(state.glassNumber===2){
               datas=  Catagorie.filter(item=>item.id===state.category )
               .map(item=>{
                  item.image=baseURL+(item.id+42)
                  return item
                 })
            }
         }
         if(state.colorNumber===3){
            if(state.glassNumber===1 ){
               datas=  Catagorie.filter(item=>item.id===state.category )
               .map(item=>{
                  item.image=baseURL+(item.id+68)
                  return item
                 })
            }
            if(state.glassNumber===2){
               datas=  Catagorie.filter(item=>item.id===state.category )
               .map(item=>{
                  item.image=baseURL+(item.id+74)
                  return item
                 })
            }
         }
         if(state.colorNumber===4){
            if(state.glassNumber===1 ){
               datas=  Catagorie.filter(item=>item.id===state.category )
               .map(item=>{item.image=baseURL+(item.id+100)
                  return item
                 })
            }
            if(state.glassNumber===2){
               datas=  Catagorie.filter(item=>item.id===state.category )
               .map(item=>{
                  item.image=baseURL+(item.id+106)
                  return item
                 })
            }
         }
      }
      
      if(autothion.typeID===3){
         if(state.colorNumber===1){
            if(state.glassNumber===1 ){
               datas=  Catagorie.filter(item=>item.id===state.category )
               .map(item=>{
                  item.image=baseURL+(item.id+10)
                  return item
                 })
            }
            if(state.glassNumber===2){
               datas=  Catagorie.filter(item=>item.id===state.category )
               .map(item=>{
                  item.image=baseURL+(item.id+16)
                  return item
                 })
            }
         }
         if(state.colorNumber===2){
            if(state.glassNumber===1 ){
               datas=  Catagorie.filter(item=>item.id===state.category )
               .map(item=>{
                  item.image=baseURL+(item.id+42)
                  return item
                 })
            }
            if(state.glassNumber===2){
               datas=  Catagorie.filter(item=>item.id===state.category )
               .map(item=>{
                  item.image=baseURL+(item.id+48)
                  return item
                 })
            }
         }
         if(state.colorNumber===3){
            if(state.glassNumber===1 ){
               datas=  Catagorie.filter(item=>item.id===state.category )
               .map(item=>{
                  item.image=baseURL+(item.id+74)
                  return item
                 })
            }
            if(state.glassNumber===2){
               datas=  Catagorie.filter(item=>item.id===state.category )
               .map(item=>{
                  item.image=baseURL+(item.id+80)
                  return item
                 })
            }
         }
         if(state.colorNumber===4){
            if(state.glassNumber===1 ){
               datas=  Catagorie.filter(item=>item.id===state.category )
               .map(item=>{item.image=baseURL+(item.id+106)
                  return item
                 })
            }
            if(state.glassNumber===2){
               datas=  Catagorie.filter(item=>item.id===state.category )
               .map(item=>{
                  item.image=baseURL+(item.id+112)
                  return item
                 })
            }
         }
      }
      setImage([...datas])
     }
   }
  
   function Catagoriya(id){
      state.category=id
      setState({...state})
   }
   function ShelfSize(id){
      state.shelfSize=id
      setState({...state})
   }
   function Requred(){
      setLoading(false)
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
             if(data.success){
               Submit()
             }
             else if(!data.success){
               notify()
             }
             
             // Handle data
          })
          .catch((err) => {
            SetCountPage(9)
            console.log(err + 'error')  
          });
  
   }
   const notify = () => toast("Bu  raqamdan ariza qabul qilingan,iltimos boshqa raqam kiriting");
   const GetImages=async ()=>{
      setLoading(false)
      let baseURL= 'http://185.217.131.88:8080/attachment/open/'
      {
         let data=[]
         if(autothion.typeID===1){
            data=  Catagorie.filter(item=>item.Typeid===autothion.typeID )
            .map(item=>{
               item.image=baseURL+item.id
               return item
              })
         }
         if(autothion.typeID===2){
           data= Catagorie.filter(item=>item.Typeid===autothion.typeID )
            .map(item=>{
               item.image=baseURL+(item.id+4)
               return item
              })
         }
         if(autothion.typeID===3){
            data= Catagorie.filter(item=>item.Typeid===autothion.typeID )
             .map(item=>{
                item.image=baseURL+(item.id+10)
                return item
               })
          }
         setImage([...data])  
       }
      setLoading(true)
   }
    useEffect(()=>{
   disable()
    localStorage.setItem("buyurtma_page",JSON.stringify(data))
   },[data])
   useEffect(()=>{
      GetImages()
      if(autothion.typeID===2){
         state.category=5
         setState({...state})
      }
     else if(autothion.typeID===3){
         state.category=11
         setState({...state})
      }
       else  if(autothion.typeID===1){
         state.category=1
         setState({...state})
      }
   },[autothion.typeID])
   useEffect(()=>{
     try{
      fetch(baseurl+'/admin/add/3',{
         method:'GET'
      }).then(res=>res.json())
     }
     catch(err){
      console.log(err+' xatolik')
     }
   },[])
   return (
        <div className='deraza '>
          <ToastContainer />
          {
            loading ? <div className="deraza-child dc-t">
           <div className='Header dc-t'>
             <header className='bg-light'>
             <div  className={'logo my-2'}>
                <img className='logo-img' onClick={()=>SetCountPage(1)} src={Buyurtma.logotip} alt="Logo" />
               
             </div>
            </header>
            <div className="step-box">
               <div className='step'>{
                State.map(item=>item.id<6 ?
                    
                    <span className={item.id<countPage ? "  steps success-step":"steps step-span"} key={item.id}>
                        <span className={item.id<=countPage ? "Success-step":"step-span"}>{item.id}</span>                 
                    </span>:"")  
               }</div>
            </div>
          </div>
         {
            State.map(item=>item.id===countPage ? <div key={item.id} className='windovs'>{item.content}</div>:"")
         }
          </div>:
    
          <Component />
          }
        </div>
    )
}
export default Room;