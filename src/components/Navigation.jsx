import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
            <nav class="navbar navbar-expand-lg bg-success">
  <div class="container-fluid">
    <Link class="navbar-brand text-black" to="/">GROCERY APP</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link active text-black" aria-current="page" to="/">Add grocery details</Link>
        <Link class="nav-link text-black" to="/Search">Search product</Link>
        <Link class="nav-link text-black" to="/delete">Delete product</Link>
        <Link class="nav-link text-black" to="/View">View all</Link>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navigation