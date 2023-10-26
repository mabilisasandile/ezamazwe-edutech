import React from "react";
import { Link } from "react-router-dom";

export function Home() {

    return (
        <div>
            <h1>EZAMAZWE EDUTECH</h1>
            <h3>CLICK LINKS TO VIEW PAGES</h3>
            <Link to="/Login">Go to User Login</Link>
            <br></br>
            <br></br>
            <Link to="/LoginCMS">Go to CMS Login</Link>
            <br></br>
            <br></br>
            <Link to="/ResetPassword">Reset Password</Link>
        </div>
    )
}