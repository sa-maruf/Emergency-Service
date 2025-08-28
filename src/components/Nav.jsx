import heart from "../assets/heart.png";
import coin from "../assets/coin.png";
import { FiAlignJustify } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { useState } from "react";

const Nav = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <nav className="bg-white">
                <section className="max-w-screen-2xl mx-auto flex items-center justify-between px-4 md-px-5 py-6">
                    <div className="flex items-center gap-2">
                        <img className="w-16" src="./public/logo.png" alt="logo" />
                        <h1 className="text-[#006747] font-bold text-2xl">Emergency <br /> Service</h1>
                    </div>
                    {/* Desktop menu */}
                    <div className="hidden md:flex items-center gap-6">
                        <button className="flex gap-2 items-center bg-[#ECFFF0] px-8 py-2 rounded-2xl">
                            <span className="text-black">0</span>
                            <img className="w-4 md-w-6" src={heart} alt="heart" />
                        </button>
                        <button className="flex gap-2 items-center bg-[#ECFFF0] px-8 py-2 rounded-2xl">
                            <span className="text-black">0</span>
                            <img className="w-4 md-w-6" src={coin} alt="coin" />
                        </button>
                        <button className="bg-[#00A63E] px-8 py-2 text-white  rounded-full flex items-center"><p>copy</p></button>
                    </div>
                    {/* mobile menu button  */}
                    <div className="block md:hidden">
                        <button onClick={toggleMobileMenu} className="block md:hidden lg:hidden text-[#006747] text-4xl cursor-pointer">
                            <div className={`${isMobileMenuOpen ? 'hidden' : 'block'}`}><FiAlignJustify /></div>
                            <div className={`${isMobileMenuOpen ? 'block' : 'hidden'}`}><FiX /></div>
                        </button>
                    </div>
                </section>
                {/* mobile menu  */}
                <section className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:hidden `} >
                    <div className="px-4 py-4 space-y-4 md:hidden ">
                        <button className="flex gap-2 items-center justify-center bg-[#ECFFF0] px-8 py-2 rounded-2xl w-full">
                            <span className="text-black">0</span>
                            <img className="w-4 md-w-6" src={heart} alt="heart" />
                        </button>
                        <button className="flex gap-2 items-center justify-center bg-[#ECFFF0] px-8 py-2 rounded-2xl w-full">
                            <span className="text-black">0</span>
                            <img className="w-4 md-w-6" src={coin} alt="coin" />
                        </button>
                        <button className="bg-[#00A63E]  pb-2.5 pt-1.5 text-white  rounded-full flex items-center w-full justify-center">copy</button>
                    </div>
                </section>
            </nav>
        </>
    )
}

export default Nav;