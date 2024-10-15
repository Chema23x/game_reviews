type AlertProps = {
    title : string,
    text: string,
    img: string,
    ok: string
}

export default function Alert ({title, text, img, ok} : AlertProps){
    return (
        <section className="absolute flex w-4/12 rounded-md animation h-3/4 bg-[#fffdfd]">
            <div className="w-full h-full flex flex-col justify-between">
                <div className="h-1/2 flex items-center justify-center">
                    <img className="absolute top-10 left-[50%] -translate-x-[50%] w-3/12 " src={img} alt="" />
                </div>
                <div className={`h-1/2 flex flex-col items-center justify-evenly  text-white ${ok}`}>
                    <h2 className="text-5xl">{title}</h2>
                    <p className="text-2xl mx-5 text-center">{text}</p>
                </div>
            </div>
        </section>
    )
}