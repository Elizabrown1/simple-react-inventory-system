import EachGoo from "./EachGoo";

const AdminTab = ({goods, deleteGood})=>{
    return(
        <>
        <table className="table">
            <thead className="thread-body">
                <tr>
                    <th>S/N</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>quantity</th>
                    <th>image</th>
                    <th>Delete</th>
                </tr>
            </thead>
            {goods.map((good, i)=>(
                <EachGoo deleteGood={deleteGood} key={i} i={i} good={good}/>
                // <EachGood deleteGood={deleteGood} key={i} i={i} good={good}/>
                

               
            ))}

        </table>
        </>
    )
}
export default AdminTab;