import { useState } from "react";
import NewFile from "./newfile";
// import UserGood from "./components/newclass/investoryuserGood";


const UserTable = ({goods, deductGood})=>{
    const [goodsToDeduct, setGoodsToDeduct] = useState([]);
   
    const getQtyAndInd = (i, qty)=>{
       let myGood = goodsToDeduct.find(good=>good.index === i);
      
       if(myGood){
        let getIndex = goodsToDeduct.indexOf(myGood);
            myGood.qty = qty;
          let  getAllGoods = [...goodsToDeduct];
            getAllGoods[getIndex] = myGood;
            setGoodsToDeduct(getAllGoods); 
       }else{
        setGoodsToDeduct([...goodsToDeduct, {index: i, qty}]);
       }
      

    }
    const checkout = ()=>{
        deductGood(goodsToDeduct);
        setGoodsToDeduct([]);
    }
    return(
        <div className="bs-example h-100 w100 row align-items-center Admin"> 
         <h2>Found It! Check Here</h2>
        <table class="table" >
            <thead class="thread-dark">
                <tr>
                    <th>S/N</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>quantity</th>
                    <th>quantity to buy </th>
                    <th>Cost</th>
                    <th>image</th>
                   
                </tr>
            </thead>
            {goods.map((good, i)=>(
               <NewFile  getQtyAndInd={getQtyAndInd}  key={i} i={i} good={good}/>
                // <UserGood getQtyAndInd={getQtyAndInd}  key={i} i={i} good={good}/>
                          
            
            ))}


        </table>
             <button  class="btn btn-danger navbar-btn"  onClick={checkout}>checkout</button>
        </div>

        
    )
}
export default UserTable;