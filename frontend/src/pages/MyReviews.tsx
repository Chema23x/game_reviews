import Header from "../components/Header";

export default function MyReviews(){
    return(
        <>
            <Header/>
            <main className="min-h-screen flex justify-center text-white">
                <section className="h-60 flex flex-col justify-center">
                    <header>
                        <h1 className="font-Gameplay text-4xl">Crea tu review</h1>
                    </header>
                    <article>
                        <input type="text" name="search" id="search" />
                    </article>
                </section>
            </main>
        </>
)
}