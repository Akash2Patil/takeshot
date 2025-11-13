import { create } from "zustand";

type Statustype = {
theme : String,
toggleTheme: ()=>void
}


const useStore  = create<Statustype>((set)=>({
    theme:"light",
    toggleTheme : ()=> set((state)=>({theme: state.theme === "light" ? "dark" : "light"}))
}))

export default useStore