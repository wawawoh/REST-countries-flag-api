import { useEffect, useState } from "react"
import "../App.css"


export default function Header () {
    const [isLight, setIsLight] = useState(true)
    
    useEffect (()=> {
        if (isLight) {
            console.log("lightmode")
        } else {
            console.log("dark mode")
        }
    },[isLight])
    return (
         <header className="flex px-4 py-4 justify-between   font-[600]">
        <h1 className="font-bold">Where in the world?</h1>
        <button onClick={()=> setIsLight((prev)=> !prev)}>
           
            <p >{isLight ? "☼ Light Mode" : " ☾ Dark Mode" } </p>
        </button>
    </header>

    )
   
}