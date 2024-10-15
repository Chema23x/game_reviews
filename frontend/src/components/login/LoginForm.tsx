import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import PasswordInput from "./PasswordInput";

type LoginFormProps = {
    changeForm: (value: boolean) => void;
};

export default function LoginForm({ changeForm }: LoginFormProps) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = {
            username,
            password
        };
        console.log(formData);
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
                    className="rounded-sm w-full text-black"
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
