import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";

const serviecs = [
    { id: 11, name: "Ambulance Service", time: "24 hours service", number: 101090, image: "https://i.ibb.co.com/BKvYHkxM/ambulance.png" },
    {
        id: 22, name: "Bangladesh Railway Helpline", time: "24 hours service", number: 7777,
        image: "https://i.ibb.co.com/XZ9hPXCj/Bangladesh-Railway.png"
    },
    { id: 33, name: "Brac Service", time: "24 hours service", number: 888, image: "https://i.ibb.co.com/0dMkG0Q/brac.png" },
    { id: 44, name: "Emergency Number", time: "24 hours service", number: 999, image: "https://i.ibb.co.com/MDt12hZ0/emergency.png" },
    { id: 55, name: "Fire Service", time: "24 hours service", number: 12345, image: "https://i.ibb.co.com/qLgGkR0L/fire-service.png" },
    { id: 66, name: "Police Helpline", time: "24 hours service", number: 333, image: "https://i.ibb.co.com/d0jCTDkL/police.png" },
    { id: 77, name: "Brac Service", time: "24 hours service", number: 888, image: "https://i.ibb.co.com/0dMkG0Q/brac.png" },
    { id: 88, name: "Fire Service", time: "24 hours service", number: 12345, image: "https://i.ibb.co.com/qLgGkR0L/fire-service.png" },
    { id: 99, name: "Emergency Number", time: "24 hours service", number: 999, image: "https://i.ibb.co.com/MDt12hZ0/emergency.png" },
]

const Card = ({ copyClick ,handleHeartClick, favoriteIds }) => {
    const [history, setHistory] = useState([]);

    // call function 
    const callClick = (data) => {
        alert("Call Now")
        setHistory((items) => ([...items, data]))
    }
    const clearClick = () => {
        setHistory([])
    }

    // copy function 
    const copyNumber = (textCopy) => {
        alert("The number has been copied.");
        navigator.clipboard.writeText(textCopy);
    }
    return (
        <>
            <section className="max-w-screen-2xl mx-auto px-5 grid lg:grid-cols-4 mt-14 mb-20 gap-4">
                {/* Card part */}
                <div className=" lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {serviecs.map((service) => {
                        return (
                            <div key={service.id}>
                                <div className="bg-[#FFFFFF] p-6 space-y-4 border-1 border-gray-300 rounded-md">
                                    <div className="flex justify-between">
                                        <img className="w-12" src={service.image} alt="" />
                                        <button onClick={() => { handleHeartClick(service); }} className="cursor-pointer">
                                            {favoriteIds.includes(service) ? <FaHeart className="text-red-600" /> : <FaRegHeart />}
                                        </button>
                                    </div>
                                    <h1 className="text-xl text-green-600 font-bold whitespace-nowrap overflow-hidden text-ellipsis">{service.name}</h1>
                                    <p className="text-sm font-bold text-gray-500">{service.time}</p>
                                    <p className="text-md font-bold text-gray-500">{service.number}</p>
                                    <div className="flex gap-4">
                                        <button onClick={() => { copyClick(); copyNumber(service.number); }} className="btn border-2 border-gray-300 text-gray-500">Copy</button>
                                        <button onClick={() => (callClick(service))} className="btn bg-green-600 text-white">Call Now</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                {/* Clear History  */}
                <div className=" lg:col-span-1 bg-[#FFFFFF] border-1 border-gray-300 rounded-md p-4 h-[400px] lg:h-[860px] overflow-auto">
                    <div className="flex justify-between items-center text-green-600 font-bold">
                        <p className="flex items-center gap-1 text-lg"><MdOutlineWatchLater /> Call History</p>
                        <button onClick={clearClick} className="text-orange-600 cursor-pointer font-bold text-xl">Clear</button>
                    </div>
                    <div className="mt-2">
                        {history.length === 0 ? (<p className="text-lg font-bold text-orange-600 px-2">No history found</p>
                        ) : (
                            history.map((callHistory, index) => (
                                <li key={index} className="list-none bg-gray-100 py-2 px-4 mt-4 rounded-md text-green-500">
                                    {callHistory.name} = {callHistory.number}
                                </li>
                            )))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Card;