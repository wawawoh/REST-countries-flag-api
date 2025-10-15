import { useEffect, useState } from "react"
import Flag from "./Flag"

interface Props {
    search:string
}
export default function FlagList ({search}:Props) {
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
const generateList = (input:string) => {
    
    return(
        data?.map ((item) => {
            return <li id={item.name.common} key={item.name.common} className={item.name.common.toLowerCase().startsWith(input.toLowerCase()) ? "visible" : "hidden"}>
                <Flag  name={item.name.common} population = {item.population} region={item.region} flag={item.flags.svg} alt={item.flags.alt} capital= {item.capital}/>
                </li>
           })

    ) 

}

useEffect(()=> {
    const fetchCountries = async () => {
        try {
            const res = await fetch("https://restcountries.com/v3.1/all?fields=name,population,region,flags,capital")
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
           
           {generateList(search)}
           {/* eveery time the state is changed, the whole program runs again aside from the inital useffect of course */}
           

         </section>

    )
   
}