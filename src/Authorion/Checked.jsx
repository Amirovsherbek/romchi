import { NavLink } from 'react-router-dom';
import { Logins } from '../image/image';
import './Login.css'
function Checked(){

    return(
        <div className="Login">
             <div className="Login-header">
                <img src={Logins.logotip} alt={'logotip'}/>
             </div>
             <div className="Login-body text-center">
                <div className='checked-modal dc-t'>
                    <NavLink to={'/auth'}
                      className="btn xxx px-5 link btn-primary py-2">Kirish</NavLink>
                    <NavLink to={'/SiginUp'}
                       className="btn xxx px-5 link btn-primary py-2">Ro’yxatdan o’tish</NavLink>
                </div>
             </div>
             <div className="Login-footer dc-t">
               <NavLink to={'/auth'} className="btn xxx px-5 link btn-primary py-2">
                   Narxni hisoblash <span><img 
                   style={{width:"15px",height:'15px'}} className={"mx-3"}
                   src={Logins.next} alt={"next"}/></span>
               </NavLink>
             </div>
        </div>
    )
}
export default Checked