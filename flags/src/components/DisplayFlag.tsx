import { useEffect, useState } from "react"
import type { Country } from "../App"
interface props {
    displayInfo: string,
   
    setDisplayInfo:React.Dispatch<React.SetStateAction<string>>
      data: Country[],
        setData: React.Dispatch<React.SetStateAction<Country[]>>
}

export default function Flag ({displayInfo, setDisplayInfo, data, setData}:props) {
    
    const currentCountry  = data.find((country)=> {

        return country.name.common === displayInfo
    })
    console.log(currentCountry)

    
   
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
                            {/* <p><span>Native Name: </span>{data[0].name.nativeName.lit.offical}</p> */}
                            <p><span>Population: </span>{currentCountry?.population.toLocaleString()}</p>
    <p><span>Region: </span>{currentCountry?.region}</p>
    <p><span>Sub Region: </span>{currentCountry?.subregion}</p>
    <p><span>Capital: </span>{currentCountry?.capital}</p>
    <p><span>Top Level Domain: </span>{currentCountry?.tld}</p>
                            
                            
                    </div> 
                    
                    <div id="country-borders">
                             borderuing countries go here 
                    </div>
                </div>
                
            </div>
     </div>
 )
}
