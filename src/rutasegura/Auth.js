import {Outlet, Navigate} from "react-router";
import {useState} from "react";

export default function LoginSeguro () {
    const [isAuth, setIsAuth] = useState(true);
    return isAuth ? <Outlet /> : <Navigate to={"/"}/>
}