import React, { useEffect, useMemo, useState } from "react"
import type { Country } from "../types/Country"
import Flag from "./Flag"
import { Link } from "react-router-dom"

interface Props {
    search:string,
    region:string,
    setDisplayInfo: React.Dispatch<React.SetStateAction<string>>,
    data: Country[],
    setData: React.Dispatch<React.SetStateAction<Country[]>>
    // FIX THESE 2 LATER
}
export default function FlagList ({search,region,setDisplayInfo,data,setData}:Props) {
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

useEffect(()=> {
    const fetchCountries = async () => {
        try {
            const res = await fetch("https://restcountries.com/v3.1/all?fields=name,population,region,flags,capital,tld,currencies,subregion,languages,borders")
            if (!res.ok ) {
                throw new Error ("failed to fetch data")
            } else {
                const newData = await res.json()
                console.log(newData)
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
            return (
                <Link to={`/FlagApp/${item.name.common}`}>
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