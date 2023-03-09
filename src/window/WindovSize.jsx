import '../App.css'
import './window.css'
import 'react-lazy-load-image-component/src/effects/blur.css'
import 'react-toastify/dist/ReactToastify.css';
import Fab from '@mui/material/Fab';
import TextField from '@mui/material/TextField';
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Buyurtma ,Type,Catagorie } from '../image/image';
import { useState,useContext,useEffect } from 'react';
import { UserContext } from '../App';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
function WindovSize(){
    const {state,setState}=useContext(UserContext)
    return (
        <div className="dc-t window-list">
           <div className="size dc-t">
                <div className="body dc-t">
                <div className='size-title dc-t'>
                   O’lchamlarni kiriting
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
                        
                          <Button style={{width:'200px'}} variant="contained">Plastic (PVX)</Button>
                        </div>
                      </div>
                </div>
                </div>
                <div className='dc-t footer'>
                  <div id="change-page">
                  <Fab color="primary" aria-label="add">
                  <NavLink to='/windov/price/catagrie' className={'window-next-page dc-t'}>
                      <img src={Buyurtma.nextpage}  alt="next" loading='lazy' />
                  </NavLink>
                  </Fab>
                  <Fab color="primary" aria-label="add">
                  <NavLink to='/' className={'window-next-page dc-t'}>
                      <img src={Buyurtma.nextpage}  alt="next" loading='lazy' />
                  </NavLink>
                  </Fab>
                  </div>
                </div>
            </div>
        </div>
    )
}
export default WindovSize;