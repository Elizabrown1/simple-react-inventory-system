import { useState } from "react"

const UserGood = ({good, i, getQtyAndInd})=>{
    const [cost, setCost] = useState(0);
    const myFunc = (e)=>{
        setCost(e.target.value* good.goodPrice);
        getQtyAndInd(i, e.target.value);
    }

    return(
        <div className="h-100 w100 row align-items-center ">
        <tbody>
        <tr>
                    <td>{i+1}</td>
                    <td>{good.goodName}</td>
                    <td>{good.goodPrice}</td>
                    <td>{good.goodQty}</td>
                    <td><div class="form-group"><input class="form-control" type="text" onKeyUp={myFunc}/></div></td>
                    <td>{cost}</td>
                    <td>{good.goodFile}</td>
                   
        </tr>
        </tbody>
        </div>

    )

}
export default UserGood;