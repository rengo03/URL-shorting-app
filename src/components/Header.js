import {useContext, useState} from "react";
import logo from "../images/logo.svg";

import { MenuContext } from "../store/Menu/context.js";
import { openMenu, closeMenu } from "../store/Menu/actions";
//importam un hook care verifica live dimensiunea display-ului
// import useWindowDimensions from "../hooks/ScreenSize.js"

export default function Header() {
    const [isOpen,setIsOpen] = useState(false);
    
    const { menuState, menuDispatch } = useContext(MenuContext);
    
    // console.log(useWindowDimensions().width);

  return (
    <>
        <header className='header max-width py-5'>
            <div className="flex items-center justify-between">
              <article className="flex items-center">
                <img src={logo} alt=''/>
                <nav className="navbarDesktop hidden md:block md:ml-5">
                    <ul className="flex items-start justify-start ">
                        <li><button className="text-slate-400">Features</button></li>
                        <li className="my-5 md:my-0 md:mx-5"><button className="text-slate-400">Pricing</button></li>
                        <li><button className="text-slate-400">Resources</button></li>
                    </ul>
                </nav>
              </article>
              

              {isOpen && 
                <div className="absolute left-5 right-5 top-20 rounded bg-purple-900 text-slate-200 text-center py-10 md:relative md:top-0 md:left-0 md:right-0 md:bg-transparent md:text-slate-700 md:text-left md:py-0 md:flex md:items-center ">
                    <nav className="md:hidden">
                        <ul className="flex-col items-start justify-start ">
                            <li><button>Features</button></li>
                            <li className="my-5 md:my-0 md:mx-5"><button>Pricing</button></li>
                            <li><button>Resources</button></li>
                        </ul>
                    </nav>
                    <div className="menu-separator"></div>
                    <ul className="flex flex-col md:hidden">
                        <li className="my-5 md:my-0 md:mr-5"><button>Login</button></li>
                        <li><button className='btn-cta rounded-full'>Sign Up</button></li>
                    </ul>
                </div>
              }
                <button onClick={ () => 
                    {
                        setIsOpen(!isOpen)
                        const currentSituation = menuState.isOpen;
                        if( currentSituation === true){
                            const actionResult = closeMenu();
                            menuDispatch(actionResult);
                        }else if( currentSituation === false){
                            const actionResult = openMenu();
                            menuDispatch(actionResult);
                        }
                    } 
                    } 
                    className="uppercase text-sm tracking-wide md:hidden">
                    {isOpen ? 
                    <span className="material-symbols-rounded">
                        close
                    </span>
                    : 
                    <span className="material-symbols-rounded">
                        menu
                    </span>}
                </button>
                
                <article className="hidden md:block ">
                    <ul className="flex items-center md:justify-start">
                        <li className="my-5 md:my-0 md:mr-5"><button className="text-slate-400">Login</button></li>
                        <li><button className='btn-cta rounded-full text-slate-400 '>Sign Up</button></li>
                    </ul>
                </article>

            </div>
        </header>
    </>
  )
}
