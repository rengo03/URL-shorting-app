import { useState } from "react";

export default function ShortenedLink(props) {

    const {link} = props;

    const [buttonText,setButtonText] = useState("Copy");

    const handleCopy = () => {
        navigator.clipboard.writeText(link.full_short_link);
        setButtonText("Coppied");
    }

  return (
    <>
       <div className="flex flex-col justify-center bg-white text-center md:flex-row md:justify-between p-3 mt-3 rounded-lg shadow mb-5">
                <article className="md:flex md:items-center">
                    <h6 className="mb-3 md:mb-0">{link.original_link}</h6>
                </article>
                <article >
                    <ul className="md:flex md:items-center">
                        <li className="md:mr-5"><button className="text-cyan-500">{link.full_short_link}</button></li>
                        <li><button onClick={handleCopy} className="btn-cta rounded-lg text-sm focus:bg-slate-800">{buttonText}</button></li>
                    </ul>
                </article>
            </div>
    </>
  )
}
