import { Logins } from "../image/image"
function Catagore(){
    return (
        <div className="Login">
             <div className="Login-header">
                <img src={Logins.logotip} alt={'logotip'}/>
             </div>
             <div className="Login-body">
                 <div className="row">
                    <div className="col-md-6 bg-danger">
                       <img src="" alt="deraza"/>
                    </div>
                    <div className="col-md-6 bg-dark">
                       <img src="" alt="eshik"/>
                    </div>
                    <div className="col-md-6 bg-primary">
                       <img src="" alt="fortichka"/>
                    </div>
                 </div>
             </div>
        </div>
    )
}
export default Catagore