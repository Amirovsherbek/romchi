import { Rom } from '../../image/image'
import "./Cat2.css"
export  default function Catagorie1(props){ 
    let data=props.data
    const Content=[
      {
        id:1,
        color:1,
        content:<div className="window1">
            {
                Rom.map(item=>{
                    if(item.id===data.colorNumber){
                        return (
                            <div key={item.id} className={item.text}>
                              <div className="list-box1">
                                  <div className="list1">
                                   </div> 
                                      <div className="list-item-side1 ">
                                          <div></div>
                                      </div>
                                      <div className="list-item-side1 ">
                                          <div>
                                              <div className="list-item__detail"></div>
                                              <span className="list-item-detailside"></span>
                                              <span className="list-item-detailside"></span>
                                          </div>
                                      </div>
                                  </div>
                             </div>
                          )
                    }
                })
            }
          </div>

      }
    ]
    return (
    <section>
        {
             Content.map(item=>{
               if(item.id===data.category){
                 return (
                    <div key={item.id} className="container1">
                    {
                        item.content
                    }
                 </div>
                 )
               }       
             })
        }
    </section>
)
}