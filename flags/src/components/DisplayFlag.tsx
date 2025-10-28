import { useEffect, useState } from "react"
import type { Country } from "../types/Country"

interface props {
    displayInfo: string,
   
    setDisplayInfo:React.Dispatch<React.SetStateAction<string>>
      data: Country[],
        setData: React.Dispatch<React.SetStateAction<Country[]>>
}

export default function Flag ({displayInfo, setDisplayInfo, data, setData}:props) {
    const [nativeName, setNativeName] = useState("")
    
     const currentCountry  = data.find((country)=> {

        return country.name.common === displayInfo
    })
    
    
    
    useEffect (()=> {
       
            console.log(currentCountry)
            const tempName = Object.keys(currentCountry?.name.nativeName)
            console.log(Object.values(currentCountry.languages))
            setNativeName((currentCountry?.name.nativeName[tempName[0]].official))

    },[displayInfo])

    
   
 return(
    <div>

   
        <button onClick={()=> setDisplayInfo("")}>Back</button>
            <div id="country-info">
                <div id="flag">
                     <img src={currentCountry?.flags.svg} alt={currentCountry?.flags.alt} />
                </div>
                 <div id="country-details">
                         <h2>{displayInfo}</h2>
                        <div>
                            <p><span>Native Name: </span>{nativeName}</p>
                            <p><span>Population: </span>{currentCountry?.population}</p>
    <p><span>Region: </span>{currentCountry?.region}</p>
    <p><span>Sub Region: </span>{currentCountry?.subregion}</p>
    <p><span>Capital: </span>{currentCountry?.capital}</p>
    <p><span>Top Level Domain: </span>{currentCountry?.tld}</p>
    <p><span>Currencies: {Object.keys(currentCountry?.currencies)}</span></p>
    <p>Languages: {Object.values(currentCountry?.languages).map((language,placement)=> placement === Object.values(currentCountry.languages).length - 1 ? `${language}` : `${language}, `) }</p>
                            
                            
                    </div> 
                    
                    <div id="country-borders">
                             borderuing countries go here 
                    </div>
                </div>
                
            </div>
     </div>
 )
}
