import { useEffect, useState } from "react";
import LoginForm from "../components/login/LoginForm";
import RegisterForm from "../components/login/RegisterForm";
import Alert from "../components/login/Alert";
import success from "../assets/login/success.gif"
import failed from "../assets/login/failed.gif"

export default function Auth() {
    const [register, setRegister] = useState(false);
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<number | null>(null);
    
    useEffect(() => {
        if(status === 200){
            setTimeout(() => {
                window.location.href = "/"
            },3000)  
        }else{
            setTimeout(() => {
                setMessage("")
                setStatus(null)
            },4000)        
        }
    },[status])

    return (
        <main className={`h-screen min-h-screen flex ${!register && "justify-center"} items-center relative`}>
            <div className={`bg-cover bg-no-repeat ${register ? "w-1/2 bg-[url(assets/login/register_bg.jpg)]" : "w-full bg-[url(assets/login/login_bg.jpg)]" } h-full bg-center`} />
            {!register ?
                <LoginForm 
                    changeForm={() => setRegister(true)} 
                    setMessage={setMessage}
                    setStatus={setStatus}
                />
                :
                <RegisterForm changeForm={() => setRegister(false)}/>
            }
            {message && 
                <Alert
                    img={status === 200 ? success : failed } 
                    title={status === 200 ? "Success" : "Hubo un problema"}
                    text={message}
                    ok={status === 200 ? "bg-green-400" : "bg-red-500" }
                />
            }
        </main>
    )
}