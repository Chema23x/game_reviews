import { useEffect, useState } from "react";
import LoginForm from "../components/login/LoginForm";
import RegisterForm from "../components/login/RegisterForm";

export default function Login() {
    const [register, setRegister] = useState(false)

    useEffect(() => {
        fetch("http://localhost:8080/user", {
            method: "GET"
        })
            .then(res => res.json())
            .then(r => console.log(r))
    }, [])

    return (
        <main className="h-screen min-h-screen flex justify-center items-center relative">
            <div className="bg-[url(assets/login/login_bg.jpg)] bg-cover bg-no-repeat w-full h-full bg-center" />
            {!register ?
                <LoginForm changeForm={() => setRegister(true)} />
                :
                <RegisterForm changeForm={() => setRegister(false)}/>
            }
        </main>
    )
}