import { useState } from "react"

const NewFile = ({good, i, getQtyAndInd})=>{
    const [cost, setCost] = useState(0);
    const myFunc = (e)=>{
        setCost(e.target.value* good.goodPrice);
        getQtyAndInd(i, e.target.value);
    }

    return(
        <>
        <tr>
                    <td>{i+1}</td>
                    <td>{good.goodName}</td>
                    <td>{good.goodPrice}</td>
                    <td>{good.goodQty}</td>
                    <td><div class="form-group"><input class="form-control" type="text" onKeyUp={myFunc}/></div></td>
                    <td>{cost}</td>
                    <td>{good.goodFile}</td>
                   
        </tr>
        </>

    )

}
export default NewFile;