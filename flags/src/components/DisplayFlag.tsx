import { useEffect, useState } from "react"
interface props {
    displayInfo: string,
    setDisplayInfo:React.Dispatch<React.SetStateAction<string>>
}

export default function Flag ({displayInfo, setDisplayInfo}:props) {
    const [isLoaded, setIsLoaded] = useState(false)
    const [flagData, setFlagData] = useState({})

    useEffect(()=> {
        console.log("this is some display info ", displayInfo)
        const fetchCountries = async () => {
            try {
                const res = await fetch(`https://restcountries.com/v3.1/name/${displayInfo.toLowerCase()}`)
                if (!res.ok ) {
                    throw new Error ("failed to fetch data")
                } else {
                    const newData = await res.json()
                    console.log("here is some new data", newData)
                    setIsLoaded(true)
                    setFlagData(newData)
                    console.log(flagData, "teh flag data")
                    console.log(newData[0].population)
    
                }
            }
            catch (error) {
                console.error(error)
    
            }
            
        }
        fetchCountries()
    },[displayInfo])
 return(
    <div>

   
        <button>Back</button>
            <div id="country-info">
                <div id="flag">
                    {/* <img src={flagData?.flags.svg} alt="" /> */}
                </div>
               {flagData && <div id="country-details">
                    <h2>{displayInfo}</h2>
                     <div>
                        {/* <p><span>Native Name: </span>{flagData[0].name.nativeName.lit.offical}</p> */}
                        <p><span>Population: </span>{flagData[0].population}</p>
                        <p><span>Region: </span>{flagData[0].region}</p>
                        <p><span>Sub Region: </span>{flagData[0].subregion}</p>
                        <p><span>Capital: </span>{flagData[0].capital}</p>
                        <p><span>Top Level Domain: </span>{flagData.tld}</p>
                        <p><span>Currencies{Object.values(flagData[0].currencies.map((value)=> value.name))}</span>
                            </p>
                    </div> 
                    
                    <div id="country-borders">
                             borderuing countries go here 
                    </div>
                </div>} 
                
            </div>
     </div>
 )
}
