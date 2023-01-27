import Catagorie1 from "../catagorie1/catagorie";
import Cat2 from "../catagorie1/Cat2";
function TEST(){
    return (
        <div>
           {
             JSON.parse(localStorage.getItem("buyurtma_page")).category==1 ? <Cat2/>:"xato 1"
           }
           {
            JSON.parse(localStorage.getItem("buyurtma_page")).category==2 ? <Cat2/>:"xato 2"
           }
        </div>
    )
}
export default TEST;