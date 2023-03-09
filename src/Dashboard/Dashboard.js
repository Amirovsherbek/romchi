import { Logins } from "../image/image"
import '../Authorion/Login.css'
import eshik from '../eshik/assets/door.png'
import { NavLink } from "react-router-dom"
function Catagore(){
    return (
        <div className="Login ">
             <div className="Login-header">
                <img src={Logins.logotip} alt={'logotip'}/>
             </div>
             <div className="Login-body">
                 <div className="row ">
                    <div className="col-6 my-1 ms-2 dc-t rounded-3 border border-dark ">
                      <img className="catagore-window" src="http://185.217.131.88:8080/attachment/open/1" alt="deraza"/>
                      <NavLink className={'btn btn-primary link xxx px-5'} to={'/windov/price/catagrie'}>Hisoblash</NavLink>
                    </div>
                    <div className="col-5 me-3 my-2 dc-t rounded-3 border border-dark">
                       <img className="catagore-door" src={eshik} alt="eshik"/>
                       <NavLink className={'btn btn-primary link xxx px-4'} to={'/eshik/homes'}>Hisoblash</NavLink>
                    </div>
                    <div className="col-5 ">
                       <img src="" alt="fortichka"/>
                    </div>
                 </div>
             </div>
        </div>
    )
}
export default Catagore