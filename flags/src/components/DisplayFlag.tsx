import { useEffect, useState } from "react"
import type { Country } from "../types/Country"
import { Link } from "react-router-dom"

interface props {
 
      currentCountry: Country | undefined,
      
      borderCountries: Map<string,number> | null 
       
}

export default function Flag ({currentCountry, borderCountries}:props) {
    const [nativeName, setNativeName] = useState("")
    // https://restcountries.com/v3.1/name/greece
    
    
    useEffect (()=> {
       
            if (!currentCountry) return
            const tempName = Object.keys(currentCountry?.name.nativeName)
            console.log(Object.values(currentCountry.languages))
            setNativeName((currentCountry?.name.nativeName[tempName[0]].official))

    },[])

    
   if (!currentCountry) {
  return <div>Loading...</div>;
}
 return (
    
       
<div className="mx-8 flex flex-col">
    <Link className="w-fit" to={"/"}>
         <button className="px-4 py-2 shadow-lg  w-fit"> ← Back</button>
        </Link>

        
       
            <div id="country-info" className="flex flex-col lg:items-center  px-4 lg:flex-row lg:justify-around lg:px-0 lg:max-h-[70%]  ">
                <div id="flag" className="aspect-square  lg:max-w-[50%]">
                     <img className="h-full w-full object-contain" src={currentCountry?.flags.svg} alt={currentCountry?.flags.alt} />
                </div>
                 <div id="country-details" className=" flex flex-col gap-8 self-start lg:self-center lg:max-w-[40%] ">
                        <h1 className="text-[1.5rem] font-medium">{currentCountry.name.common}</h1>
                        <div className=" flex flex-col gap-8 lg:flex-row">
                                  <div>
                                    <p><span>Native Name: </span>{nativeName}</p>
                                    <p><span>Population: </span>{currentCountry?.population.toLocaleString()}</p>
                                    <p><span>Region: </span>{currentCountry?.region}</p>
                                    <p><span>Sub Region: </span>{currentCountry?.subregion}</p>
                                    <p><span>Capital: </span>{currentCountry?.capital}</p>
                        </div>
                        
                            <div>
                            <p><span>Top Level Domain: </span>{currentCountry?.tld}</p>
                            <p><span>Currencies: {Object.keys(currentCountry?.currencies)}</span></p>
                            <p>Languages: {Object.values(currentCountry?.languages).map((language,placement)=> placement === Object.values(currentCountry.languages).length - 1 ? `${language}` : `${language}, `) }</p>
                            
                            
                    </div> 
                            
                        </div>
                  
                    
                    <div id="country-borders">
                        <span>Borders:</span>
                        <ul className="flex  gap-3 flex-wrap">
                           

                        
                            { borderCountries &&
                            Array.from(borderCountries.keys()).map((countryCode) => {
                                console.log("the new Country Ccode", countryCode)
                                console.log("heyyyyyyy")
                                return (
                                    <Link to={`/flagapp/${countryCode}`}>
                                    
                                    <li className="w-fit border-gray-400 border-4 p-2" key={countryCode}>
                                        {borderCountries.get(countryCode)}
                                        </li>
                                    </Link>
                                    
                                )
                            })}
                            </ul>
                    </div>
                            
                       
                        
                </div>
                
            </div>
     </div>

        )
        
    
    
 
}
