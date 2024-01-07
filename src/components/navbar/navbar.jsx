import React from 'react'
import logo from '../../assets/logo.png';
import { Link, useSearchParams } from 'react-router-dom';
import { searchKey } from '../todos/todo_signal';
export default function NavBar() {
    console.log('render navbar');
    const [param, setSearch]=useSearchParams({search:''})
    const search= param.get("search")
    searchKey.value=search

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
                        <Link className="nav-link" to="/todos" >Todos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/" >Counter</Link>
                        </li>
                    </ul>
                    <div className="d-flex" role="search">
                        <input className="form-control shadow me-2 rounded-4" type="search" placeholder="Search" defaultValue={search} onChange={(event)=> setSearch(prev=>{
                            prev.set('search',event.target.value) 
                            searchKey.value=event.target.value
                            return prev;
                            }, {relative:true})}  />
                    </div>
                </div>
            </div>
        </nav>
    )
}
