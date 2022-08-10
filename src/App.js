import Header from "./components/Header";
import Footer from "./components/Footer";
import Boost from "./components/Boost";
import Advanced from "./components/Advanced";
import Showcase from "./components/Showcase";
import Shortener from "./components/Shortener";

import { useReducer } from "react";

import { MenuContext } from "./store/Menu/context.js";
import { menuReducer, initialState as menuInitialState } from "./store/Menu/reducer";

export default function App() {

  const [menuState, menuDispatch] = useReducer( menuReducer, menuInitialState);
  const menuContextValue = {
    menuState,
    menuDispatch
  }
  return (
    <>
    <MenuContext.Provider value={menuContextValue}>
      <Header/>
      <Showcase/>
      <Shortener/>
      <Advanced/>
      <Boost/>
      <Footer/>
      </MenuContext.Provider>
    </>
  );
}

