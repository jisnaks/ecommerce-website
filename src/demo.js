<nav className="navbar navbar-expand-lg bg-body-tertiary ">
<div className="container-fluid ">
<a className="navbar-brand ms-4" href="#">
    <img src="https://logo.com/image-cdn/images/kts928pd/production/29500268399d23888b5557a2ad412ef71751f5d3-731x731.png?w=1080&q=72"
     alt="Bootstrap" width="80" height="80"/>
  </a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-bold fs-5">
      <li className="nav-item pe-3">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
      </li>
      <li className="nav-item pe-3">
        <a className="nav-link" href="#">About Us</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Login</a>
      </li>
    </ul>
    <form className="d-flex me-5" role="search">
      <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-dark" type="submit">Search</button>
    </form>
    <FontAwesomeIcon className="fa-2x pe-3" icon={faCartShopping} />
  </div>
</div>
</nav>