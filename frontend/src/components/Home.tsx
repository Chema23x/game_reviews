import Header from "./Header"
import cxbox from "../assets/home/control_n.png"
import pxbox from "../assets/home/control_play.png"
import nxbox from "../assets/home/control_x.png"
import { useEffect, useState } from "react"

    const imgs: { [key: number]: string } = {
        0: cxbox,
        1: pxbox,
        2: nxbox
    }

export default function Home(){
    const [currentImg, setCurrentImg] = useState(0)
    const [autoRotate] = useState(true)
    

    useEffect(() => {
       let intervalId: number;
        if (autoRotate) {
            intervalId = setInterval(() => {
                const nextIndex = (currentImg + 1) % Object.keys(imgs).length
                setCurrentImg(nextIndex)
            }, 2000) 
        }
        return () => clearInterval(intervalId)
    }, [currentImg, autoRotate])

    return(
        <>
            <Header/>
            <main className="min-h-screen flex text-white">
                <section className="h-screen flex flex-col justify-center w-1/2 gap-y-10 pl-10 pb-32 ">
                    <header>
                        <h1 className="font-Gameplay text-xl lg:text-5xl">Explora el Mundo de los Videojuegos: Comparte y Descubre Opiniones</h1>
                    </header>
                    <article>
                        <p className="text-md lg:text-xl text-justify">
                            En nuestra página, los videojuegos cobran vida a través de las opiniones y experiencias de jugadores como tú. Te invitamos a explorar un mundo lleno de reseñas, donde cada juego se analiza a fondo y se comparte con entusiasmo. Desde los últimos lanzamientos hasta los clásicos inolvidables, aquí encontrarás críticas que te ayudarán a tomar decisiones informadas sobre tus próximas aventuras.
                        </p>
                    </article>
                </section>
                <div className="flex justify-center items-center w-1/2">
                    <img src={imgs[currentImg]} className="h-80" alt="control de consola" />
                </div>
            </main>
        </>
    )
}