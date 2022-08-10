import bgMobile from "../images/bg-boost-mobile.svg";
import bgDektop from "../images/bg-boost-desktop.svg";

export default function Boost() {
  return (
    <>
        <section className="boost relative">
            <picture>
                <source media="(min-width:768px)" srcSet={bgDektop}></source>
                <img src={bgMobile} alt=""/>
            </picture>
            <div className="flex items-center justify-center flex-col boost-inner ">
                <h2 className="mb-5 text-3xl md:text-4xl font-bold text-white text-center">Boost your links today</h2>
                <button className="btn-cta rounded-full">Get Started</button>
            </div>
        </section>
    </>
  )
}
