import React from 'react';
import { Link } from 'react-router-dom';
// import './index.css';

export const Navbar = () => {
    return (
        <div>
{/* <!--Navbar--> */}
<nav className="navbar navbar-dark bg-dark">

  {/* <!-- Navbar brand --> */}
  <Link className="navbar-brand" to="https://reactjs.org">React</Link>

  {/* <!-- Collapse button --> */}
  <button class="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1"
    aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"><span className="dark-blue-text"><i
        class="fas fa-bars fa-1x"></i></span></button>

  {/* <!-- Collapsible content --> */}
  <div className="collapse navbar-collapse" id="navbarSupportedContent1">

    {/* <!-- Links --> */}
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/pagination">Pagination</Link>
      </li>
      <li class="nav-item">
        <Link className="nav-link" to="/adduser">Add User</Link>
      </li>
      <li class="nav-item">
        <Link className="nav-link" to="/api">API Data</Link>
      </li>

      {/* <li class="nav-item">
        <Link class="nav-link" to="/apicall">API Call</Link>
      </li> */}
    </ul>
    {/* <!-- Links --> */}

  </div>
  {/* <!-- Collapsible content --> */}

</nav>
</div>
// {/ <!--/.Navbar--> */}
    )
}
