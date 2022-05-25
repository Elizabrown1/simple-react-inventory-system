import { Link } from "react-router-dom"


const Nav = ()=>{
    return(
        // <nav className="navbar navbar-dark bg-light">
            // {/* <Link to="/">Home</Link>|
            // <Link to="/admin">Admin</Link>|
            // <Link to="/user">User</Link> */}
        //     <a className="nav-link" data-toggle="tab" href="/" aria-expanded="false">Home</a>
        //     <a className="nav-link" data-toggle="tab" href="/admin" aria-expanded="false">Admin</a>
        //     <a className="nav-link" data-toggle="tab" href="/user" aria-expanded="false">User</a>
            
        // </nav>


<nav class="navbar navbar-inverse">
<div class="container-fluid">
  <div class="navbar-header">
    <a class="navbar-brand" href="/">Inventory System</a>
  </div>
  <ul class="nav navbar-nav">
    <li class="active">
    <Link to="/">Home</Link>
        {/* <a href="/">Home</a> */}
        </li>
    <li>
    <Link to="/admin">Admin</Link>
        {/* <a href="/admin">Admin</a> */}
        </li>
    <li>
    <Link to="/user">User</Link>
        {/* <a href="/user">User</a> */}
        </li>
  </ul>
  <button class="btn btn-danger navbar-btn">Button</button>
</div>
</nav>
    )
}
export default Nav;