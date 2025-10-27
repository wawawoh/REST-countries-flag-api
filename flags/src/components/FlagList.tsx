import React, { useEffect, useMemo, useState } from "react"
import Flag from "./Flag"

interface Props {
    search:string,
    region:string,
    setDisplayInfo: React.Dispatch<React.SetStateAction<string>>
}
export default function FlagList ({search,region,setDisplayInfo}:Props) {
const [isLoaded, setIsLoaded] = useState(false)
const [data, setData] = useState<Country[]>()
interface Country {
    name:{
        common:string
    },
    population:number,
    region:string,
    flags: {
        png: string, 
        svg: string,
        alt:string
    }
    capital:string
}

const filteredCountries = useMemo(()=> {
    const filtered = data?.filter((item)=> {
        const nameMatches = !search || item.name.common.toLowerCase().startsWith (search.trim().toLowerCase())
        const regionMatches = !region || item.region.toLowerCase() == region.toLowerCase()
        return nameMatches && regionMatches
    })
    return filtered
},[search,data,region])
// only rerenders when the two dependencies changew

useEffect(()=> {
    const fetchCountries = async () => {
        try {
            const res = await fetch("https://restcountries.com/v3.1/all?fields=name,population,region,flags,capital")
            if (!res.ok ) {
                throw new Error ("failed to fetch data")
            } else {
                const newData = await res.json()
                
                setIsLoaded(true)
                setData(newData)

            }
        }
        catch (error) {
            console.error(error)

        }
        
    }
    fetchCountries()
},[])

    return (
         <section>
           <p> {isLoaded ? "loaded" : "loading"}</p>
           <ul className="list-none flex flex-col gap-8">
             {filteredCountries?.map ((item) => {
            return <li id={item.name.common} key={item.name.common} onClick={()=> setDisplayInfo(item.name.common)} >
                <Flag  name={item.name.common} population = {item.population} region={item.region} flag={item.flags.svg} alt={item.flags.alt} capital= {item.capital}/>
                </li>
           })}
            
           </ul>
          

    )
           {/* eveery time the state is changed, the whole program runs again aside from the inital useffect of course */}
           

         </section>

    )
   
}