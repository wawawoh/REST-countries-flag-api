import { useState } from "react"

interface Props {
    region:string
    setRegion:React.Dispatch<React.SetStateAction<string>>
}
export default function Filter ({region, setRegion}: Props) {
    const regionArray = ["Africa", "Americas", "Asia", "Europe","Oceania"]
    const [showingRegion, setShowingRegion]= useState(false)

    const regionClicked = (item:string) => {
      
        
        setRegion(item ==="X" ? "" : item)

            setShowingRegion(false)
        
    }

    return (
        <>

       
        <button onClick={()=> setShowingRegion((prev)=> region ? prev : !prev)} className="bg-light-mode-background self-start p-4 ">
            {region ? <>{region} <span className="border-gray-600 border-2 p-2" onClick={()=> regionClicked("X")}>X</span> </>: "Filter by Region"}

        </button>
        {showingRegion &&  <div>
            <ul  className={`${showingRegion ? "pointer-events-auto" : "pointer-events-none"} bg-light-mode-background w-fit p-6 absolute`}>
                {regionArray.map((item)=><li key={item} onClick={()=> {regionClicked(item)}}>{item}</li>)}
            </ul>
        </div> }
       

        
           
     </>

    )
 
}