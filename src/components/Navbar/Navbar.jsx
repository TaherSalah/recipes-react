import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark  ">
          <div className="container-fluid ">
            <Link className="navbar-brand" to="/">Recipes App</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto mx-5">
                <Link className="nav-link active" aria-current="page" to="/">All Recips</Link>
                <Link className="nav-link" aria-current="page" to="about">All News</Link>
                <Link className="nav-link" aria-current="page" to="sport">sports News</Link>
                <Link className="nav-link" aria-current="page" to="business">business News</Link>
                <Link className="nav-link" aria-current="page" to="headlines">headlines  News</Link>
              </div>
            </div>
          </div>
        </nav>

      </>
    )
  }
}
