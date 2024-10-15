import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import PasswordInput from "./PasswordInput";

type RegisterFormProps = {
    changeForm: (value: boolean) => void;
};

const inputs = [
    { title: "Nombre de usuario", tag: "username" },
    { title: "Celular", tag: "phone" },
    { title: "Correo Electrónico", tag: "email" },
];

export default function RegisterForm({ changeForm }: RegisterFormProps) {
    
    // Estado para los valores del formulario
    const [formValues, setFormValues] = useState({
        username: "",
        phone: "",
        email: "",
        password: "",
        passwordConfirm: ""
    });

    // Estado para manejar los errores
    const [formErrors, setFormErrors] = useState({
        username: "",
        phone: "",
        email: "",
        password: "",
        passwordConfirm: ""
    });

    // Función para manejar los cambios en los inputs
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value
        }));
    };

    // Validaciones del formulario
    const validateForm = () => {
        let errors = {
            username: "",
            phone: "",
            email: "",
            password: "",
            passwordConfirm: ""
        };

        if (!formValues.username) {
            errors.username = "El nombre de usuario es obligatorio";
        }

        const phoneRegex = /^[0-9]{10,}$/;
        if (!phoneRegex.test(formValues.phone)) {
            errors.phone = "El celular debe tener al menos 10 dígitos";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formValues.email)) {
            errors.email = "Debe ser un correo electrónico válido";
        }

        if (formValues.password.length < 6) {
            errors.password = "La contraseña debe tener al menos 6 caracteres";
        }

        if (formValues.password !== formValues.passwordConfirm) {
            errors.passwordConfirm = "Las contraseñas no coinciden";
        }

        setFormErrors(errors);

        // Verificar si hay algún error
        return Object.values(errors).every((error) => error === "");
    };

    // Manejar el envío del formulario
    const handleForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Formulario válido", formValues);
        } else {
            console.log("Errores en el formulario", formErrors);
        }
    };

    return (
        <form
            action="#"
            onSubmit={handleForm}
            className="bg-black text-white w-1/2 h-full p-10 rounded-md flex flex-col items-center gap-y-10"
        >
            <header className="text-center text-4xl">
                <h1>Regístrate</h1>
            </header>
            <div className="flex flex-col items-start w-full gap-y-3 py-10 px-32">
                {inputs.map((input, index) => (
                    <div key={index} className="w-full flex flex-col gap-y-3">
                        <label htmlFor={input.tag}>{input.title}</label>
                        <input
                            className="rounded-sm w-full pl-2 text-black"
                            type="text"
                            name={input.tag}
                            id={input.tag}
                            value={formValues[input.tag as keyof typeof formValues]}
                            onChange={handleChange}
                        />
                        {formErrors[input.tag as keyof typeof formErrors] && (
                            <span className="text-red-500">
                                {formErrors[input.tag as keyof typeof formErrors]}
                            </span>
                        )}
                    </div>
                ))}
                <label htmlFor="password">Contraseña</label>
                <PasswordInput
                    tag="password"
                    value={formValues.password}
                    onChange={handleChange} 
                />
                {formErrors.password && (
                    <span className="text-red-500">{formErrors.password}</span>
                )}

                <label htmlFor="passwordConfirm">Confirmar contraseña</label>
                <PasswordInput
                    tag="passwordConfirm"
                    value={formValues.passwordConfirm} // Valor controlado
                    onChange={handleChange} // Actualiza el estado
                />
                {formErrors.passwordConfirm && (
                    <span className="text-red-500">{formErrors.passwordConfirm}</span>
                )}
            </div>
            <motion.button
                className="py-2 rounded-md border w-1/2"
                whileTap={{ scale: 1.2 }}
                type="submit"
            >
                Crear cuenta
            </motion.button>
            <div className="flex gap-5 items-center">
                <span> ¿Ya estás registrado?</span>
                <motion.button
                    onClick={() => changeForm(false)}
                    className="px-4 py-2 border rounded-md"
                    whileTap={{ scale: 1.2 }}
                >
                    Iniciar Sesión
                </motion.button>
            </div>
        </form>
    );
}
