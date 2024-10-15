import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import PasswordInput from "./PasswordInput";

type LoginFormProps = {
    changeForm: (value: boolean) => void;
    setMessage: (value: string) => void;
    setStatus: (value: number) => void;
};

export default function LoginForm({ changeForm, setMessage, setStatus }: LoginFormProps) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = {
            username,
            password
        };
        try {
            const res = await fetch("http://localhost:8080/api/v1/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await res.json();
            setMessage(data.message);
            setStatus(res.status); 

        } catch (error) {
            setMessage("Error de conexión.");
        }
    };

    return (
        <form
            action="#"
            onSubmit={handleForm}
            className="bg-black text-white w-3/12 h-2/3 p-10 rounded-md form-shadow flex flex-col items-center gap-y-10 absolute"
        >
            <header className="text-center text-4xl">
                <h1>Iniciar sesión</h1>
            </header>
            <div className="flex flex-col items-start w-full gap-y-2">
                <label htmlFor="username">Usuario:</label>
                <input
                    className="rounded-sm w-full pl-2 text-black"
                    type="text"
                    name="username"
                    id="username"
                    value={username} // Valor controlado por el estado
                    onChange={(e) => setUsername(e.target.value)} // Actualiza el estado
                />
                <label className="mt-3" htmlFor="password">Contraseña</label>
                <PasswordInput
                    tag={"password"}
                    value={password} // Valor controlado por el estado
                    onChange={(e) => setPassword(e.target.value)} // Actualiza el estado
                />
            </div>
            <motion.button
                className="py-2 rounded-md border w-1/2"
                whileTap={{ scale: 1.2 }}
                type="submit"
            >
                Ingresar
            </motion.button>
            <motion.button whileHover={{ scale: 1.2 }}>
                ¿Olvidaste tu contraseña?
            </motion.button>
            <div className="flex gap-5 items-center">
                <span> ¿No te has registrado?</span>
                <motion.button
                    onClick={() => changeForm(true)}
                    className="px-4 py-2 border rounded-md"
                    whileTap={{ scale: 1.2 }}
                >
                    Crear cuenta
                </motion.button>
            </div>
        </form>
    );
}
