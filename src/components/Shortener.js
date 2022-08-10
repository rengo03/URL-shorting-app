import { useState, useEffect } from "react";


import bgMobile from "../images/bg-shorten-mobile.svg";
import bgDesktop from "../images/bg-shorten-desktop.svg";

import ShortenedLink from "./ShortenedLink";

//GET/POST: https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html

const getLocalStorage  = () => {
    let links = localStorage.getItem("links");

    if(links){
        return JSON.parse(localStorage.getItem("links"));
    }else{
        return [];
    } 
}

export default function Shortener() {

    const [text,setText] = useState("");
    const [links,setLinks] = useState(getLocalStorage());
    
    const handleSubmit = (e) => {
        e.preventDefault();
        

        if(!text){
            alert("Input is empty")
        }else{
            const shortenLink = async () => {
                const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${text}`);
                const data = await res.json();

                console.log(data);
                setLinks(data.result);
                setText("");
            }
            shortenLink();
        }
    }
    // isEmpty primeste nr-ul key-lor obiectului links pt. a verifica ulterior daca links e gol sau nu 
    const isEmpty = Object.keys(links).length;

    useEffect( () => {
        localStorage.setItem("links", JSON.stringify(links))
    }, [links])

  return (
    <>
        <section className='max-width shortener relative'>
            <picture>
                <source media="(min-width: 768px)" srcSet={bgDesktop} />
                <img src={bgMobile} alt=""/>
            </picture>

            <form className="form" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row">
                    <input type="url" placeholder="Shorten a link here..."
                    className="w-full py-2 px-5 rounded mb-2 md:mb-0"
                    value={text}
                    onChange={ (e) => setText(e.target.value)}/>
                    <button type="submit" className="btn-cta rounded-lg w-full md:w-40 md:ml-5"
                    onClick={handleSubmit}>
                        Shorten It!
                    </button>
                </div>
            </form>
           
            {isEmpty ? <ShortenedLink link={links} /> : null }
            
        </section>
    </>
  )
}
