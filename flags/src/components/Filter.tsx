import { useState } from "react"

interface Props {
    region:string
    setRegion:React.Dispatch<React.SetStateAction<string>>
}
export default function Filter ({region, setRegion}: Props) {
    const regionArray = ["Africa", "Americas", "Asia", "Europe","Oceania"]
    const [showingRegion, setShowingRegion]= useState(false)

    const regionClicked = (item:string) => {
        
        setRegion(item)
        setShowingRegion(false)
    }

    return (
        <>

       
        <button onClick={()=> setShowingRegion((prev)=> !prev)} className="bg-light-mode-background self-start p-4 ">
            {region ? <>{region} <span onClick={()=> regionClicked("X")}>X</span> </>: "Filter by Region"}

        </button>
        {showingRegion &&  <div>
            <ul  className={`${showingRegion ? "pointer-events-auto" : "pointer-events-none"} bg-light-mode-background w-fit p-6`}>
                {regionArray.map((item)=><li key={item} onClick={()=> {regionClicked(item)}}>{item}</li>)}
            </ul>
        </div> }
       

        // trhis is fake
           {/* <div>
        
        <label htmlFor="regionSelect">Select a region</label>
        <select onChange={(e)=> setRegion(e.target.value)} name="regionSelect" id="regionSelect">
            
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Oceania">Oceania</option>
            <option value="Europe">Europe</option>
            <option value="America">America</option>
        </select>
    </div> */}
     </>

    )
 
}