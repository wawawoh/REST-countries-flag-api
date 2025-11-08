import { useEffect, useState } from "react"



interface Props {
    region:string
    setRegion:React.Dispatch<React.SetStateAction<string>>
}
export default function Filter ({region, setRegion}: Props) {
    const regionArray = ["Africa", "Americas", "Asia", "Europe","Oceania"]
    const [showingRegion, setShowingRegion]= useState(false)
    const [clickedIcon, setClickedIcon] = useState("V")

    useEffect (()=> {
        setClickedIcon(()=> region ? "X" : "V")
    },[region])

    const regionClicked = (item:string) => {
      
        
        setRegion(item =="X" || item == "V" ? "" : item)

        setShowingRegion(false)
        
    }

    return (
        <div className="relative">

       

       
        <button onClick={()=> setShowingRegion((prev)=> region ? prev : !prev)} className="bg-light-mode-background self-start p-4 flex justify-between gap-10 dark:bg-dark-mode-elements shadow-lg">
            {region ? <>{region}  </>: "Filter by Region"}
            <span className={clickedIcon =="V" ?"border-gray-200 border-2 px-2 rounded-sm pointer-events-none" : " border-gray-200 border-2 px-2 rounded-sm"} onClick={()=> regionClicked(clickedIcon)}>{clickedIcon}</span>

        </button>
        {showingRegion &&  <div>
            <ul  className={`${showingRegion ? "pointer-events-auto" : "pointer-events-none"} bg-light-mode-background w-fit p-6 absolute dark:bg-dark-mode-elements`}>
                {regionArray.map((item)=><li className="cursor-pointer" key={item} onClick={()=> {regionClicked(item)}}>{item}</li>)}
            </ul>
        </div> }
       

        
           
      </div>
    )
 
}