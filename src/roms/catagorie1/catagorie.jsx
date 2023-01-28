import { Rom ,Rom2} from '../../image/image'
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

      },
      {
        id:2,
        color:1,
        content:<div className="window1">
            {
                Rom.map(item=>{
                    if(item.id===data.colorNumber){
                        return (
                            <div key={item.id} className={item.text}>
                            <div className="list-box">
                                <div className="list">
                                    
                                </div> 
        
                                    <div className="list-item-side1">
                                        <div></div>
                                    </div>
                                    <div className="list-item-side11">
                                        <div>
                                            <div className="list-item__detail11"></div>
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

      },
      {
        id:3,
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

      },
      {
        id:4,
        color:1,
        content:<div className="window1">
            {
                Rom.map(item=>{
                    if(item.id===data.colorNumber){
                        return (
                            <div key={item.id} className={item.text}>
                            <div className="list-box">
                                <div className="list">
                                    
                                </div> 
        
                                    <div className="list-item-side1">
                                        <div></div>
                                    </div>
                                    <div className="list-item-side11">
                                        <div>
                                            <div className="list-item__detail11"></div>
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

      },
      {
        id:5,
        content: <div className="window2">
         {
           Rom2.map(item=>{
            if(item.id===data.colorNumber){
                return (
                    <div key={item.id} className={item.text}>
            <div className="list-box2">
                <div className="list2">
                    <div className="list-item-top2">
                        <div></div>
                    </div>
                    <div className="list-item-top2">
                        <div></div>
                    </div>
                </div> 
                <div className="list-bottom2">
                    <div className="list-item-side2">
                        <div></div>
                    </div>
                    <div className="list-item-center2">
                        <div>
                            <div className="list-item-middle2">
                                    <span className="list-item-detail-left"></span>
                                    <span className="list-item-detail"></span>
                            </div>
                        </div>
                    </div>
                    <div className="list-item-side2">
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
                )
            }
           })
         }
     </div>
      },
      {
        id:6,
        content: <div className="window2">
         {
           Rom2.map(item=>{
            if(item.id===data.colorNumber){
                return (
                  <div key={item.id} className={item.text}>
                    <div className="list-box2">
                        <div className="list2">
                            <div className="list-item-top2">
                                <div></div>
                            </div>
                            <div className="list-item-top2">
                                <div></div>
                            </div>
                        </div> 

                        <div className="list-bottom2">
                            <div className="list-item-side2">
                                <div></div>
                            </div>
                            <div className="list-item-center22" >
                                <div>
                                    <div className="list-item-middle2">
                                            <span className="list-item-detail22"></span>
                                            <span className="list-item-detail-left"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="list-item-side2">
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
                )
            }
           })
         }
     </div>
      },
      {
        id:7,
        content: <div className="window2">
         {
           Rom2.map(item=>{
            if(item.id===data.colorNumber){
                return (
                    <div className={item.text}>
                    <div className="list-box23">
                        <div className="list23">
                            <div className="list-item-top23">
                                <div></div>
                            </div>
                            <div className="list-item-top23">
                                <div></div>
                            </div>
                        </div> 

                        <div className="list-bottom23">
                            <div className="list-item-center23">
                                <div>
                                    <div className="list-item-left23">
                                        <span className="list-item-detail-left23"></span>
                                        <span className="list-item-detail23"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="list-item-side23">
                                <div></div>
                            </div>
                            <div className="list-item-center23">
                                <div>
                                    <div className="list-item-right23">
                                            <span className="list-item-detail-left23"></span>
                                            <span className="list-item-detail23"></span>
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
     </div>
      },
      {
        id:8,
        content: <div className="window2">
         {
           Rom2.map(item=>{
            if(item.id===data.colorNumber){
                return (
                    <div className={item.text}>
                    <div className="list-box23">
                        <div className="list23">
                            <div className="list-item-top23">
                                <div></div>
                            </div>
                            <div className="list-item-top23">
                                <div></div>
                            </div>
                        </div> 

                        <div className="list-bottom23">
                            <div className="list-item-center23">
                                <div>
                                    <div className="list-item-left23">
                                        <span className="list-item-detail-left23"></span>
                                        <span className="list-item-detail23"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="list-item-side23">
                                <div></div>
                            </div>
                            <div className="list-item-center23">
                                <div>
                                    <div className="list-item-right23">
                                            <span className="list-item-detail-left23"></span>
                                            <span className="list-item-detail23"></span>
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
     </div>
      },
      {
        id:9,
        content: <div className="window2">
         {
           Rom2.map(item=>{
            if(item.id===data.colorNumber){
                return (
                    <div className={item.text}>
                    <div className="list-box23">
                        <div className="list23">
                            <div className="list-item-top23">
                                <div></div>
                            </div>
                            <div className="list-item-top23">
                                <div></div>
                            </div>
                        </div> 

                        <div className="list-bottom23">
                            <div className="list-item-center23">
                                <div>
                                    <div className="list-item-left23">
                                        <span className="list-item-detail-left23"></span>
                                        <span className="list-item-detail23"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="list-item-side23">
                                <div></div>
                            </div>
                            <div className="list-item-center23">
                                <div>
                                    <div className="list-item-right23">
                                            <span className="list-item-detail-left23"></span>
                                            <span className="list-item-detail23"></span>
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
     </div>
      },
      {
        id:10,
        content: <div className="window2">
         {
           Rom2.map(item=>{
            if(item.id===data.colorNumber){
                return (
                    <div className={item.text}>
                    <div className="list-box23">
                        <div className="list23">
                            <div className="list-item-top23">
                                <div></div>
                            </div>
                            <div className="list-item-top23">
                                <div></div>
                            </div>
                        </div> 

                        <div className="list-bottom23">
                            <div className="list-item-center23">
                                <div>
                                    <div className="list-item-left23">
                                        <span className="list-item-detail-left23"></span>
                                        <span className="list-item-detail23"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="list-item-side23">
                                <div></div>
                            </div>
                            <div className="list-item-center23">
                                <div>
                                    <div className="list-item-right23">
                                            <span className="list-item-detail-left23"></span>
                                            <span className="list-item-detail23"></span>
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
     </div>
      },
      {
        id:11,
        content:<div className="window2">
        <div className="win-box3">
            <div className="list__box list-item">
                <div className="list-item__left">
                    <div></div>
                </div>
                <div className="list-item__middle">
                    <div className="list-item__center">
                        <div></div>
                        <span></span>
                    </div>
                    <div className="list-item__detail">
                    </div>
                </div>
                <div className="list-item__right">
                    <div></div>
                </div>
            </div>
        </div>
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