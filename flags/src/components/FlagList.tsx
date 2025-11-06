import React, { useEffect, useMemo, useState } from "react"
import type { Country } from "../types/Country"
import Flag from "./Flag"
import { Link } from "react-router-dom"


interface Props {
    search:string,
    region:string,
    
    data: Country[],
    setData: React.Dispatch<React.SetStateAction<Country[]>>
    // FIX THESE 2 LATER
}
export default function FlagList ({search,region,data,setData}:Props) {
const [isLoaded, setIsLoaded] = useState(false)


const filteredCountries = useMemo(()=> {
    const filtered = data?.filter((item)=> {
        const nameMatches = !search || item.name.common.toLowerCase().startsWith (search.trim().toLowerCase())
        const regionMatches = !region || item.region.toLowerCase() == region.toLowerCase()
        return nameMatches && regionMatches
    })
    return filtered
},[search,data,region])
// only rerenders when the two dependencies changew

useEffect (()=> {
    console.log(data)
},[data])

useEffect(()=> {
    const fetchCountries = async () => {
        try {
            const res = await fetch("https://restcountries.com/v3.1/all?fields=name,population,region,flags,capital,cca3")
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
           <ul className="list-none flex flex-col gap-8 items-center px-8 md:grid md:grid-cols-3 ">
             {filteredCountries?.map ((item) => {
            return (
                <Link to={`/FlagApp/${item.cca3}`}>
             <li id={item.name.common} key={item.name.common}  >
                <Flag  name={item.name.common} population = {item.population} region={item.region} flag={item.flags.svg} alt={item.flags.alt} capital= {item.capital}/>
                </li>
            </Link>

            )
            


           })}
            
           </ul>
          

    )
           {/* eveery time the state is changed, the whole program runs again aside from the inital useffect of course */}
           

         </section>

    )
   
}