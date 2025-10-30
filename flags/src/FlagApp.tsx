
import { useEffect, useState } from "react"
import { useParams  } from "react-router-dom"
import type { Country } from "./types/Country"
import DisplayFlag from './components/DisplayFlag'

export default function FlagApp () {
    const {id} = useParams()
    const [currentCountry, setCurrentCountry] =  useState<Country[]>([])
    const [isLoaded, setIsLoaded] = useState(false)

    // fetches the data from the api
    useEffect (()=> {

                // fetches countryinfomration
                const fetchCountryInfo = async() => {
                    try {
                        
                        console.log(`https://restcountries.com/v3.1/name/${id}`)
                        // fix spacing issue
                        const tempString = id
                        const result = tempString?.trim()?.replaceAll(" ", "%20")
                        const tempData = await fetch (`https://restcountries.com/v3.1/name/${result}`)
                        if (!tempData.ok) {
                            throw new Error("bad fetch")
                        } else {
                            const newData = await tempData.json()

                            
                            setCurrentCountry(newData[0])
                            setIsLoaded(true)

                        }
                    }
                    catch (error){
                        alert(error + " this is the error")
        
                    }

                }
                fetchCountryInfo()

             },[id])
             
    useEffect(()=> {
        console.log(currentCountry, "the current coirugfnj") 
    },[currentCountry])

    return (
        <>
             <h1>This is a flag app {id} </h1>
             {!isLoaded  ?<div>now loading</div> : <DisplayFlag currentCountry= {currentCountry} id={id} />}
        
        

        </>
       
    )
}