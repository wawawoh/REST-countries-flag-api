import { useEffect, useState } from "react"
import "../App.css"


export default function Header ({lightmode, setLightMode}) {
    
    
    useEffect (()=> {
        if (lightmode) {
            console.log("lightmode")
            
        } else {
            console.log("dark mode")
        }
    },[lightmode])
    return (
         <header className="flex px-4 py-4 justify-between   font-[600] dark:bg-dark-mode-elements">
        <h1 className="font-bold">Where in the world?</h1>
        <button onClick={()=> setLightMode((prev)=> !prev)}>
           
            <p >{lightmode ? "☼ Light Mode" : " ☾ Dark Mode" } </p>
        </button>
    </header>

    )
   
}