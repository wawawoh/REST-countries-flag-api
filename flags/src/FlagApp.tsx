
import { useEffect, useState } from "react"
import { useParams  } from "react-router-dom"
import type { Country } from "./types/Country"
import DisplayFlag from './components/DisplayFlag'

export default function FlagApp () {
    const {id} = useParams()
    const [currentCountry, setCurrentCountry] =  useState<Country[]>([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [borderCountries,setBorderCountries] = useState<string[]>([])

    // fetches the data from the api
    useEffect (()=> {

                // fetches countryinfomration
                setBorderCountries([])
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


    //  FETCHES BORDER COUNTRIES
    useEffect(()=> {
        console.log(currentCountry, "the RERNT CURRENT CUREBRBHJB")
        const fetchBorderInfo = async(code:string) => {
             
            try{
                const temp = await fetch(`https://restcountries.com/v3.1/alpha/${code}?fields=name`)
                if (!temp.ok) {
                    throw new Error ("fethcing courntu error")
                } else {
                    const borderName = await temp.json()
                    console.log("this is a broder",currentCountry.name.common )
                    console.log("this si current country" , borderName.name.common  )
                    if (borderName.name.common !== currentCountry.name.common) {

                            setBorderCountries((prev)=>  [...prev,  borderName.name.common])
                    }
                
                }

            } catch (error){
                console.error(error)

            }

        }
        // Fetches brodering countries
        
       if (currentCountry.borders) {
        currentCountry.borders.forEach(element => {
            fetchBorderInfo(element)

            
        });

       } 
    },[currentCountry])

    return (
        <>
             <h1>This is a flag app {id} </h1>
             {!isLoaded  ?<div>now loading</div> : <DisplayFlag currentCountry= {currentCountry} id={id} borderCountries={borderCountries} />}
        
        

        </>
       
    )
}