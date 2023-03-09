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
    const style={
        width:"40px"
    }
    return (
        <div className="dc-t window-list">
           <div className='window-header'>
               <div className='w-100 window-header-box text-left '>
                   <img src={Buyurtma.logotip} alt='logo' className='logo-img'/>
               </div>
               <div className='next-step-window  py-4'>
                   <div className=' window-step mx-auto'>
                   <div className='green' style={style}></div>
                      <div  className={'windows-step-box'} style={{backgroundSize:'10%'}}>
                      
                       <div><NavLink to={'/windov/price/catagrie'} className={'window-step-link '}>1</NavLink></div>
                        <div><NavLink to={'/windov/price/catagrie'} className={'window-step-link'}>2</NavLink></div>
                        <div><NavLink to={'/'} className={'window-step-link'}>3</NavLink></div>
                        <div><NavLink to={'/'} className={'window-step-link'}>4</NavLink></div>
                        <div><NavLink to={'/'} className={'window-step-link'}>5</NavLink></div>
                      </div>
                   </div>
               </div>
           </div>
                <div className="body dc-t">
                <div className='size-title dc-t'>
                   O’lchamlarni kiriting
                </div>
                <div className='size-list'>
                  <TextField className='text-left'
                            type={'number'} 
                            id="outlined-required"label="Bo'yi" />
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
                      <div className='width-div-window  bg-dark  my-0 d-flex flex-wrap'>
                        <div id='mobile' className='width-div-input mx-auto'>
                          <TextField
                            InputLabelProps={{
                            style:{ fontSize:'24px'}}}
                            type={'number'} 
                           id="outlined-required"label="Bo'yi"/>
                        </div>
                         <div className='width-div-input mx-auto'>
                            <TextField
                              InputLabelProps={{
                              style:{ fontSize:'24px'} }}
                              type={'number'}
                              id="outlined-required"
                              label="Eni"/>
                         </div>
                        
                      </div>
                      <div className='my-0'>
                          <Button style={{backgroundColor:'#1EE23D'}} className={'material '} variant="contained">Plastic (PVX)</Button>
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
    )
}
export default WindovSize;