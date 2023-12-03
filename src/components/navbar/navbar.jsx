import React from 'react'
import logo from '../../assets/logo.png';
import { componentName } from '../controller';
export default function NavBar() {
    console.log('render navbar');
    return (
        <nav className="navbar navbar-expand-lg shadow">
            <div className="container-fluid">
                <a className="navbar-brand" href="#!">
                    <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top me-2" />
                    React Signals
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#!navbarTogglerDemo02">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#!" onClick={()=>componentName.value='todos'}>Todos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#!" onClick={()=>componentName.value='counter'}>Counter</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}
