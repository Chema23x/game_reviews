import Logo from "../assets/header/logo.png"

// Pestañas Mis reviews, reviews
export default function Header(){

    return(
        <>
            <section className="min-w-screen z-10 h-[70px] grid grid-flow-row grid-cols-6 bg-black shadow-lg shadow-blue-700 font-Gameplay">
                <a className="flex justify-center" href="/">
                    <img src={Logo} alt="logo del proyecto" className="h-[70px]" />
                </a>
                <nav className="text-white flex justify-evenly col-span-4 relative">
                    <a 
                        className="h-full w-1/3 flex items-center justify-center"
                        href="/mis-reviews">
                        Mis reviews
                    </a>
                    <a 
                        className="h-full w-1/3 flex items-center justify-center"
                        href="">
                        Reviews
                    </a>
                    <a 
                        className="h-full w-1/3 flex items-center justify-center"
                        href="">
                        Ranking
                    </a>
                    <div className="slid animate-first"></div>
                </nav>
                <div className="flex justify-center items-center text-white">
                    <a className="hover:scale-125 transition" href="/iniciar-sesion">Iniciar Sesion</a>
                </div>
            </section>
        </>
    )
}

