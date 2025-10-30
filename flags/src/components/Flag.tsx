interface Props {
    name:string,
    population:number,
    region:string,
    flag:string,
    alt:string,
    capital:string[]
}

export default function Flag ({name, population, region, flag,alt,capital}:Props) {
    return (
 <div className="  bg-white" >
        <img src={flag} alt={alt} className="" />
        <div className="flex-col flex py-8 px-8" >
             <h3 className="pb-4 text-2xl">{name}</h3>
        <p>Population:{population} </p>
        <p>Region: {region}</p>
        <p>Capital: {capital}</p>

        </div>
       
    </div>
    )
   
}