import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="#">FRIENDS</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link active" aria-current="page" to="/">ADD FRIEND</Link>
        <Link class="nav-link" to="/viewall">VIEW ALL</Link>
        {/* <Link class="nav-link" to="#">Pricing</Link>
        <a class="nav-link disabled" aria-disabled="true">Disabled</a> */}
      </div>
    </div>
  </div>
</nav>

    </div>
  )
}

export default NavBar