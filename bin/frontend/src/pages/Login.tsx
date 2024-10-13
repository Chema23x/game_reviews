import { FormEvent, useState } from "react"
import { motion } from "framer-motion"
export default function Login(){
    const [showPassword, setShowPassword] = useState(false)

    const handleForm = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const data = new FormData(form);
        const entries = Object.fromEntries(data.entries());
            console.log(entries)
    }

    return(
        <main className="h-screen min-h-screen flex justify-center items-center relative">
            <div className="bg-[url(assets/login/login_bg.jpg)] bg-cover bg-no-repeat w-full h-full bg-center"/>
            <form 
                action="#"
                onSubmit={(e) => handleForm(e)} 
                className="bg-black text-white w-3/12 h-2/3 p-10 rounded-md form-shadow flex flex-col items-center gap-y-10 absolute"
            >
                <header className="text-center text-4xl">
                    <h1>Inciar sesión</h1>
                </header>
                <div className="flex flex-col items-start w-full gap-y-1">
                    <label htmlFor="username">Usuario:</label>
                    <input className="rounded-sm w-full text-black" type="text" name="username" id="username" />
                    <label className="mt-3" htmlFor="password">Contraseña</label>
                    <div className="flex bg-white w-full">
                        <input className="w-full text-black" type={!showPassword ? "password" : "text"} name="password" id="password" />
                        <button onClick={(e) => {setShowPassword(!showPassword), e.preventDefault()}}>
                            {!showPassword ? 
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                </svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                            }
                        </button>
                    </div>
                </div>
                <motion.button 
                    className="py-2 rounded-md border w-1/2"
                    whileTap={{scale: 1.2}}
                >
                        Ingresar
                </motion.button>
                <span>¿Olvidaste tu contraseña?</span>
                <div className="flex gap-5 items-center">
                   <span> ¿No te has registrado?</span>
                   <motion.button 
                        className="px-4 py-2 border rounded-md"
                        whileTap={{scale: 1.2}}
                    > 
                        Crear cuenta 
                   </motion.button>
                </div>
            </form>
        </main>
    )
}