import '../App.css'
import './window.css'
import 'react-lazy-load-image-component/src/effects/blur.css'
import ReactSimplyCarousel from 'react-simply-carousel';
import 'react-toastify/dist/ReactToastify.css';
import Fab from '@mui/material/Fab';
import TextField from '@mui/material/TextField';
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Buyurtma ,Type,Catagorie } from '../image/image';
import { useState,useContext,useEffect } from 'react';
import { UserContext } from '../App';
import { NavLink } from 'react-router-dom';

function WindovCat(){
    const {state,setState}=useContext(UserContext)
    const [images,setImage]=useState([])
    const style={
        width:"40px"
    }
    const [autothion,setAutothion]=useState({
        typeID:1,
        generateNumber:0,
     })
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    function Catagoriya(id){
        state.category=id
        setState({...state})
     }
     const GetImages=async ()=>{
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
     }
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
        GetImages()
     },[])
    return(
      <div className=' dc-t window-list' >
           <div className='window-header'>
               <div className='w-100 window-header-box text-left '>
                   <img src={Buyurtma.logotip} alt='logo' className='logo-img'/>
               </div>
               <div className='next-step-window  py-4'>
                   <div className=' window-step mx-auto'>
                   <div className='green' style={style}></div>
                      <div  className={'windows-step-box'} style={{backgroundSize:'10%'}}>
                      
                       <div><NavLink to={'/windov/price/catagrie'} className={'window-step-link '}>1</NavLink></div>
                        <div><NavLink to={'/'} className={'window-step-link'}>2</NavLink></div>
                        <div><NavLink to={'/'} className={'window-step-link'}>3</NavLink></div>
                        <div><NavLink to={'/'} className={'window-step-link'}>4</NavLink></div>
                        <div><NavLink to={'/'} className={'window-step-link'}>5</NavLink></div>
                      </div>
                   </div>
               </div>
           </div>
            <div className="body dc-t ">
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
              <div className='dc-t footer '>
               <div id="change-page">
                  <div className="count">
                  <TextField
                    InputLabelProps={{
                       style:{ fontSize:'24px'}
                    }}
                    type={'number'}
                     inputProps={{
                        transform:'scale(0.7)'
                     }}
                     style={{transform:"scale(0.8)"}}
                     id="outlined-required"
                     label="Soni"
                     defaultValue="1"
                   />
                  </div>
                  <Fab color="primary" aria-label="add">
                  <NavLink to='/windov/price/size' className={'window-next-page dc-t'}>
                      <img src={Buyurtma.nextpage}  alt="next" loading='lazy' />
                  </NavLink>
                  </Fab>
               </div>
             </div>
         </div>      
        
    )
}
export default WindovCat