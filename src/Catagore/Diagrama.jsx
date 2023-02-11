import { NavLink} from 'react-router-dom'
import "./Admin.css"
import Graph from './graph';
import Navbar from '../component/Navbar';
import { Rom,Admin_panel } from "../image/image";
function Diagramma(){
    return (
        <div className='float-container bg-dark w-100 '>      
            <div className="admin-header prof-admin-header " >
              <div className="admin-headerb-box">
                <NavLink to={"/"} >
                  <img className="logo-img" src={Admin_panel.logo} alt="logotip" />
                </NavLink>
              </div>
              <div className='next-mouth'>
                  <span style={{transform:'rotate(180deg)'}}>{Admin_panel.next} </span>
                  Mart
                  <span>{Admin_panel.next}</span>
              </div>
            </div>
           <div style={{height:"87vh"}} className='navbar-right bg-black'>
               <Navbar/>
           </div>
           <div className='row-box' >  
              <div className='Col-md-3'>
                 <div className='Col-md-3-title'>
                    Qo'ng'iroqlar
                 </div>
                 <div className='nav-box'>  
                   <div style={{backgroundColor:'#001F43'}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-telephone-outbound"
                      style={{color:'#0077FF'}}
                       viewBox="0 0 16 16">
                       <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z"/>
                      </svg>
                   </div>
                    <div style={{color:'#0077FF'}}>1856</div>
                 </div>
              </div>
              <div className='Col-md-3'>
                 <div className='Col-md-3-title'>
                   Buyurtmalar soni
                 </div>
                 <div className='nav-box'>
                   <div style={{backgroundColor:'#0E2E11'}}>
                   <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"
                   style={{color:'#01DD07'}} 
                   fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>
                   </div>
                    <div style={{color:'#01DD07'}}>528</div>
                 </div>
              </div>
              <div className='Col-md-3'>
                 <div className='Col-md-3-title'>
                 Tashrif buyuruvchilar soni
                 </div>
                 <div className='nav-box'>
                   <div style={{backgroundColor:'#441E00'}}>
                   <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"
                   style={{color:'#EF7E3A'}}
                    fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
                    <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
                   </svg>
                   </div>
                    <div style={{color:'#EF7E3A'}}>2136</div>
                 </div>
              </div>
           <Graph/>
           <div className='graph-about-box'>
               <div><span style={{backgroundColor:'#0077FF'}}></span>Qo’ng’iroqlar</div>
               <div><span style={{backgroundColor:'#1FD524'}}></span>Buyurtmalar</div>
               <div><span style={{backgroundColor:'#EF7E3A'}}></span>Tashriflar</div>
           </div>
           </div>    
        </div>
    )
}
export default Diagramma;