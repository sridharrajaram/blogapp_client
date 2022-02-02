import React from 'react'
import { NavLink } from 'react-router-dom'
import image from './home.png'


function Home() {
    return (
        <>
            <div className="container mt-5">
                <h4 className="text-center mt-5 mb-5">
                    Hi Committers, Welcome to blogging application!!!
                </h4>
                <div className="hompage-image text-center mt-5">
                    <img src={image} alt="blog" style={{ "maxWidth": "30%", "maxHeight": "50%" }} />
                </div>
                <div className="login-register text-center mt-5">
                    <NavLink to={!window.localStorage.getItem("app_token") ? '/login' : "/write-blog"}><button className="btn btn-success">Login</button></NavLink>
                    &nbsp;&nbsp;
                    <NavLink to="/register"><button className="btn btn-primary">Register</button></NavLink>
                </div>
            </div>
            <footer style={{ "position": "absolute", "bottom": "0", "backgroundColor": "mediumseagreen", "width": "100%", "height": "40px" }}>
                <h6 className="text-center mt-2">© Made with Luv - Sridhar Rajaram ❤❤❤</h6>
            </footer>
        </>
    )
}

export default Home
