import Logo from "../assets/header/logo.png"

// Pestañas Mis reviews, reviews
export default function Header(){
    return(
        <>
            <section className="min-w-screen h-[70px] grid grid-flow-row grid-cols-6 border-b-2 bg-black">
                <a className="flex justify-center" href="/">
                    <img src={Logo} alt="logo del proyecto" className="h-[70px]" />
                </a>
                <nav className="text-white flex justify-evenly items-center col-span-4">
                    <a className="border border-red-600 h-full transito" href="">Mis reviews</a>
                    <a href="">Reviews</a>
                    <a href="">Ranking</a>
                </nav>
                <div className="flex justify-end gap-8 pr-10 items-center text-white">
                    <a href="">Iniciar Sesión</a>
                    <a href="">Registrarse</a>
                </div>
            </section>
        </>
    )
}

