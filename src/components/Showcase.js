import showcase from "../images/illustration-working.svg";

import { useContext } from "react";
import { MenuContext } from "../store/Menu/context.js";

export default function Showcase() {

    const { menuState} = useContext(MenuContext);

    
  return (
    <>
        <section className={`py-10 lg:py-20 ${menuState.isOpen ? "pt-80" : ""}`}>
            <div className="max-width flex flex-col-reverse gap-5 md:flex-row md:justify-center md:gap-10 ">
                <article className="text-center lg:text-left md:text-left">
                    <h1 className="text-5xl lg:text-6xl mb-5 font-bold text-slate-800">More than just shorter links </h1>
                    <p className="lg:text-lg text-slate-400 mb-10">
                        Build your brand's recognition and get detailed insights on how your links are performing.
                    </p>
                    <button className="btn-cta rounded-full">Get Started</button>
                </article>
                <article className="showcase md:ml-0">
                    <img src={showcase} alt="Shortly"/>
                </article>
            </div>
        </section>
    </>
  )
}
