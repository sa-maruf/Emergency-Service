import ambulance from "../assets/ambulance.png";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoIosCopy } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { useRef, useState } from "react";

const Box = ({ heartCount, copyCount }) => {
    const [icon, setIcon] = useState(false);
    const [number]=useState("");
    const numberRef=useRef(null);

    const heartClick = () => {
        setIcon(!icon);
    }
    const numberCopy = () => {
        alert("The number has been copied");
        const textCopy=numberRef.current.innerText;
        navigator.clipboard.writeText(textCopy);
    }

    return (
        <>
            <section className="max-w-screen-2xl mx-auto grid md:grid-cols-4 gap-8 md:gap-4 mt-12 pb-12 px-4 md-px-5">
                <div className="md:col-span-3">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
                        {/* card 01  */}
                        <div className="space-y-4 bg-[#FFFFFF] shadow shadow-[#00000026] p-4 ">
                            <div className="flex items-center justify-between text-black">
                                <img className="w-14" src={ambulance} alt="" />
                                <button onClick={() => { heartClick(); heartCount(); }} className={`${icon ? 'text-red-600 cursor-pointer' : 'text-black cursor-pointer'}`}>
                                    <FaHeart />
                                </button>
                            </div>
                            <h3 className="text-black font-bold text-lg">Ambulance service</h3>
                            <p className="text-[#617890]">service 24 hours</p>
                            <h4 ref={numberRef} className="text-black text-lg">{number} 01733516438</h4>
                            <div className="flex justify-between">
                                <button onClick={() => { copyCount(); numberCopy(); }} className="btn bg-[#FFFFFF] border-[#E9EAEA] text-black px-10 w-[48%]">
                                    <IoIosCopy />
                                    copy
                                </button>
                                <button className="btn bg-[#00A63E] border-[#00A63E] px-10 w-[48%]">
                                    <IoCall />
                                    call
                                </button>
                            </div>
                        </div> {/*card end */}
                    </div>
                </div>
                {/* call history  */}
                <div className="md:col-span-1 p-4 md:p-3 lg:p-4 bg-[#FFFFFF] shadow shadow-[#00000026]">
                    <div className="flex items-center justify-between">
                        <div className="text-black flex items-center gap-2">
                            <MdOutlineWatchLater />
                            <p className="font-bold md:text-sm lg:text-base">Call History</p>
                        </div>
                        <div>
                            <a href=""><button className="bg-[#00A63E] text-white px-5 py-2 md:px-2 md:text-xs lg:text-base lg:px-5 rounded-lg cursor-pointer">clear</button></a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Box;