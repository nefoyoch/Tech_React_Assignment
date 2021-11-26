import React from 'react';
// import './index.css';

export const Layout = () => {
    return (
        <div>
{/* <!--Navbar--> */}
<nav class="navbar navbar-dark bg-dark">

  {/* <!-- Navbar brand --> */}
  <a class="navbar-brand" href="#">React</a>

  {/* <!-- Collapse button --> */}
  <button class="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1"
    aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"><span class="dark-blue-text"><i
        class="fas fa-bars fa-1x"></i></span></button>

  {/* <!-- Collapsible content --> */}
  <div class="collapse navbar-collapse" id="navbarSupportedContent1">

    {/* <!-- Links --> */}
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/pagination">Pagination</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/adduser">Add User</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/apicall">API Call</a>
      </li>
    </ul>
    {/* <!-- Links --> */}

  </div>
  {/* <!-- Collapsible content --> */}

</nav>
</div>
// {/ <!--/.Navbar--> */}
    )
}
