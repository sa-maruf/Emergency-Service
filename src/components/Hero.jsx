import logoDark from "../assets/logoDark.png";

const Hero = () => {
    return (
        <>
            <section className="bg-gradient-to-r from-[#003827] from-10% via-[#00593E] via-30% to-[#003727] to-90% text-white">
                <div className="max-w-screen-2xl mx-auto px-4 md-px-5 py-6 text-center space-y-3">
                    <div className="flex justify-center">
                        <img className="w-22" src={logoDark} alt="logo" />
                    </div>
                    <h1 className="font-bold text-2xl">Emergency Services Directory</h1>
                    <p>Government Emergency Services at Your Fingertip – A Project by  Government of the People’s Republic of Bangladesh</p>
                </div>
            </section>
        </>
    )
}

export default Hero;