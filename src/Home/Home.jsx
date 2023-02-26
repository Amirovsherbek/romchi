import { Logins } from "../image/image"
import { NavLink } from 'react-router-dom';
function Home(){
    return (
        <div className="Login ">
         <div className="Login-header">
           <img src={Logins.logotip} alt={'logotip'}/>
        </div>
         <div className="Login-body">
            <img src="https://logobank.uz:8005/media/logos_png/akfa_group-01.png" alt="akfa"/>
         </div>
         <div className="login-footer text-center">
            <NavLink to={'/checked'} className="btn xxx px-5 link btn-primary py-2">Narxni hisoblash <span><img 
            style={{width:"15px",height:'15px'}} className={"mx-3"}
             src={Logins.next} alt={"next"}/></span></NavLink>
         </div>
        </div>
    )
}
export default Home