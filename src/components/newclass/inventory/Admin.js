
import { useState } from "react";
import AdminTab from "./AdminTab";

const Admin = ({goods, deleteGood, addGood})=>{
    const [goodName, setGoodName] = useState("");
    const [goodPrice, setGoodPrice] = useState("");
    const [goodQty, setGoodQty] = useState("");
    const [goodFile, setGoodFile] = useState("");
    // const [goods, setGoods] = useState([]);
   const setNewGood = ()=>{
        let fileName = goodFile.slice(12);
        let newGood= {goodName, goodPrice, goodQty, goodFile: fileName };
        addGood(newGood);
   }
   
    return(
        <div className="bs-example h-100 w100 row align-items-center Admin">
            <h2>Add New Stock</h2>
            <div className="form-group">
            <input  type="text" class="form-control box-shadow" onChange={(e)=>{setGoodName(e.target.value)}} placeholder="goodName"/>
            </div>
            
            <div className="form-group">
            <input  type="text" class="form-control" onChange={(e)=>{setGoodPrice(e.target.value)}} placeholder="price"/>
            </div>
            
            <div className="form-group">
            <input  type="text" class="form-control" placeholder="quantity" onChange={(e)=>{setGoodQty(e.target.value)}}/>
            </div>
            
            <div className="form-group" >
            <input type="file" onChange={(e)=>{setGoodFile(e.target.value)}}/>
            </div>

            <div>
            <button class="btn btn-danger navbar-btn" onClick={setNewGood}>Add good</button>
            </div>
            
            
            <AdminTab deleteGood={deleteGood} goods={goods}/>

            {/* <AdminTable deleteGood={deleteGood} goods={goods} /> */}

        </div>
    )
}
export default Admin;