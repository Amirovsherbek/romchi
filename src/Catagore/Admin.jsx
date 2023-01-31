import { NavLink} from 'react-router-dom'
import "./Admin.css"
import { Rom,Admin_panel } from "../image/image";
function Admin(){
    return(
        <div className="container-admin">
            <div className="admin-header">
              <div className="admin-headerb-box">
                <NavLink to={"/"} >
                  <img className="logo-img" src={Admin_panel.logo} alt="logotip" />
                </NavLink>
              </div>
              <div className="admin-headerb-box">
                D
              </div>
            </div>
            <div className="List-box">
                <div className="list-table">
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Telefon raqam</th>
                                <th>Ism</th>
                                <th>Viloyat</th>
                                <th>Balandligi</th>
                                <th>Kengligi</th>
                                <th>Rangi</th>
                                <th>sana</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>+998907111205</td>
                                <td>Alisher</td>
                                <td>Toshkent</td>
                                <td>150</td>
                                <td>140</td>
                                <td><img src={Rom[2].image} alt="rom-image" /></td>
                                <td>11.12.2022</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>+998907111205</td>
                                <td>Bobiur</td>
                                <td>Qashqadaryo</td>
                                <td>250</td>
                                <td>240</td>
                                <td><img src={Rom[2].image} alt="rom-image" /></td>
                                <td>11.12.2022</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>+9989901154205</td>
                                <td>Alisher</td>
                                <td>Toshkent</td>
                                <td>180</td>
                                <td>160</td>
                                <td><img src={Rom[3].image} alt="rom-image" /></td>
                                <td>11.12.2022</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>+998907111205</td>
                                <td>Akmal</td>
                                <td>Toshkent shahar</td>
                                <td>120</td>
                                <td>130</td>
                                <td><img src={Rom[2].image} alt="rom-image" /></td>
                                <td>11.12.2022</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr> 
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Admin;