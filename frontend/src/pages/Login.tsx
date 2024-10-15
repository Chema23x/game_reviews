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
        <main className={`h-screen min-h-screen flex ${!register && "justify-center"} items-center relative`}>
            <div className={`bg-cover bg-no-repeat ${register ? "w-1/2 bg-[url(assets/login/register_bg.jpg)]" : "w-full bg-[url(assets/login/login_bg.jpg)]" } h-full bg-center`} />
            {!register ?
                <LoginForm changeForm={() => setRegister(true)} />
                :
                <RegisterForm changeForm={() => setRegister(false)}/>
            }
        </main>
    )
}