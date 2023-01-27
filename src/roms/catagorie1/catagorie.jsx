import './catagorie.css'
import { Rom } from '../../image/image'
export  default function Catagorie1(){
    console.log(Rom.map(item=>item.id===JSON.parse(localStorage.getItem("buyurtma_page")).colorNumber ? "win-box win-box-dub":"win-box win-box-white") )
    console.log(JSON.parse(localStorage.getItem('buyurtma_page')).colorNumber)
    let data=JSON.parse(localStorage.getItem("buyurtma_page"))
return (
    <section>
      {
        Rom.map(item=>{
            if(item.id===data.colorNumber){
                return(
                    <div key={item.id} className="container">
                    <div className="win">
                        <div className={item.text}>
                            <div className="list-box">
                                <div className="list">
                                    <div className="list-item-top">
                                        <div></div>
                                    </div>
                                    <div className="list-item-top">
                                        <div></div>
                                    </div>
                                </div> 
                                <div className="list-bottom">
                                    <div className="list-item-side">
                                        <div></div>
                                    </div>
                                    <div className="list-item-center">
                                        <div>
                                            <div className="list-item-middle">
                                                <span className="list-item-detail-left"></span> 
                                                <img src="./ruchka color/petlya_zalatoy.png" alt="" className="list-item-detail-left"/>
                                                <img className="list-item-img" src="./ruchka color/Ruchka_zalatoy.png" alt=""/>
                                                <img src="./ruchka color/petlya_zalatoy.png" alt="" className="list-item-detail-left"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-item-side">
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                        </div>          
                    </div>
                </div>
                )
            }
        })
      }
    </section>
)
}
