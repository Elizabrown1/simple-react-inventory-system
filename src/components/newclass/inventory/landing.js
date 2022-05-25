import Login from "./Login"
import SignUp from "./SignUp"


const Landing = ()=>{
    return(
      <>
      <h1 className="Well">Welcome To My Page<br/><h5>Please Sign In To Proceed</h5></h1>
      <Login/>
      <SignUp/>
      </>
    //     <div className="container-fluid App  text-center w-100 h10">
    //         welcome to our app
    //         <br/><br/>
    //         <form>
    //   <label>
    //     <p>Username</p>
    //     <input type="text" />
    //   </label>
    //   <label>
    //     <p>Password</p>
    //     <input type="password" />
    //   </label>
    //   <div>
    //     <button type="submit">Submit</button>
    //   </div>
    // </form>
    //     </div>
        
    )
}
export default Landing;