
import { useEffect, useState } from "react"
import { useParams  } from "react-router-dom"
import type { Country } from "./types/Country"
import DisplayFlag from './components/DisplayFlag'

export default function FlagApp () {
    const {id} = useParams()
    const [currentCountry, setCurrentCountry] =  useState<Country>()
    const [isLoaded, setIsLoaded] = useState(false)
    const [borderCountries,setBorderCountries] = useState (new Map())

    // fetches the data from the api
    useEffect (()=> {

                // fetches countryinfomration
                setBorderCountries(new Map())
                const fetchCountryInfo = async() => {
                    try {
                        
                        console.log(`https://restcountries.com/v3.1/alpha/${id}`)
                        
                       
                        const tempData = await fetch (`https://restcountries.com/v3.1/alpha/${id}`)
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
        if (!currentCountry || !currentCountry.borders) return; // 🧱 guard clause
        
        console.log(currentCountry.borders)
        const fetchBorderInfo = async (code:string)=> {
            try {
                const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}?&fields=name`)
                if (!res.ok) {
                    console.error ("border country faileure")
                } else {
                    const newData = await res.json()
                    console.log("this is a border country", newData)
                    setBorderCountries((prev)=> {
                        const newMap = new Map(prev)
                        newMap.set(code, newData.name.common)
                        return newMap
                    })
                }
            }
            catch(error) {
                console.error(error)

            }

        }
        currentCountry.borders.forEach((border)=> {
           fetchBorderInfo(border)
           
            
        });
       
        // define new map
        // take the borders and for each border 
        //  fetch the relevant information and update the map
    },[currentCountry])

    return (
        <>
             <h1>This is a flag app {id} </h1>
             {!isLoaded  ?<div>now loading</div> : <DisplayFlag currentCountry= {currentCountry} borderCountries={borderCountries} />}
        
        

        </>
       
    )
}