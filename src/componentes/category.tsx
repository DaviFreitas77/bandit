import { Link } from "react-router-dom"

export default function Category() {
    return (
        <div className="flex flex-col items-center justify-center gap-7 relative top-36">
            <h2 style={{ fontSize: '2rem', fontWeight: "400", padding: 10, textAlign: 'center' }}>
                Explore nossos produtos
            </h2>
            <div className="flex  items-center justify-center gap-16 flex-wrap">
                <button className="flex flex-col items-center justify-center gap-2">
                    <img className="w-40 h-40 cursor-pointer  transition-transform duration-300 ease-in-out hover:scale-110" src="/img/draken.jpeg" alt="" />
                    <p className="text-2xl ">Tokyo Revenger</p>
                </button>
                <button className="flex flex-col items-center justify-center gap-2">
                    <img className="w-40 h-40 cursor-pointer  transition-transform duration-300 ease-in-out hover:scale-110" src="/img/draken.jpeg" alt="" />
                    <p >Moletom</p>
                </button>
                <Link
                    to={'/glasses'}
                    className="flex flex-col items-center justify-center gap-2">
                    <img className="w-40 h-40 cursor-pointer  transition-transform duration-300 ease-in-out hover:scale-110" src="/img/draken.jpeg" alt="" />
                    <p>Copos</p>
                </Link>
                <button className="flex flex-col items-center justify-center gap-2">
                    <img className="w-40 h-40 cursor-pointer  transition-transform duration-300 ease-in-out hover:scale-110" src="/img/draken.jpeg" alt="" />
                    <p >Tokyo revenger</p>
                </button>
                <button className="flex flex-col items-center justify-center gap-2">
                    <img className="w-40 h-40 cursor-pointer  transition-transform duration-300 ease-in-out hover:scale-110" src="/img/draken.jpeg" alt="" />
                    <p >Tokyo revenger</p>
                </button>
                <button className="flex flex-col items-center justify-center gap-2">
                    <img className="w-40 h-40 cursor-pointer  transition-transform duration-300 ease-in-out hover:scale-110" src="/img/draken.jpeg" alt="" />
                    <p >Tokyo revenger</p>
                </button>

            </div>
        </div>
    )
}
