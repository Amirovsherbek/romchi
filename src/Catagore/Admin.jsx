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
                <table className="table">
                   <thead>
                     <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Telefon raqam</th>
                          <th scope="col">Ism</th>
                          <th scope="col">Viloyat</th>
                          <th scope="col">Balandligi</th>
                          <th scope="col">Kengligi</th>
                          <th scope="col">rangi</th>
                          <th scope="col">sana</th>
                          <th scope='col'>Tekshirildi</th>
                          <th scope='col'>O'chirish</th>
                    </tr>
                   </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>+998934561236</td>
      <td>Alisher</td>
      <td>Toshkent viloyat</td>
      <td>180</td>
      <td>160</td>
      <td><img src={Rom[2].image} alt="images" /></td>
      <td>12.05.2022</td>
       <td><input type={'checkbox'}/></td>
       <td>{Admin_panel.delete}</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>+998934561236</td>
      <td>Sulton</td>
      <td>Andijon viloyat</td>
      <td>180</td>
      <td>160</td>
      <td><img src={Rom[3].image} alt="images" /></td>
      <td>12.05.2022</td>
       <td><input type={'checkbox'}/></td>
       <td>{Admin_panel.delete}</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>+998900061236</td>
      <td>Begzot</td>
      <td>Jizzax viloyat</td>
      <td>210</td>
      <td>190</td>
      <td><img src={Rom[3].image} alt="images" /></td>
      <td>12.05.2022</td>
       <td><input type={'checkbox'}/></td>
       <td>{Admin_panel.delete}</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>+998990061236</td>
      <td>Bobur</td>
      <td>Qashqadaryo viloyati viloyat</td>
      <td>180</td>
      <td>160</td>
      <td><img src={Rom[2].image} alt="images" /></td>
      <td>12.05.2022</td>
       <td><input type={'checkbox'}/></td>
       <td>{Admin_panel.delete}</td>
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
        <td>12.05.2022</td>
       <td><input type={'checkbox'}/></td>
       <td>{Admin_panel.delete}</td>
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
        <td>12.05.2022</td>
       <td><input type={'checkbox'}/></td>
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
        <td>12.05.2022</td>
       <td><input type={'checkbox'}/></td>
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
        <td>12.05.2022</td>
       <td><input type={'checkbox'}/></td>
    </tr>
  </tbody>
</table>
                </div>
            </div>
        </div>
    )
}
export default Admin;
