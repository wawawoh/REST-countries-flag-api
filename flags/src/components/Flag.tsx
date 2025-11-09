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
 <div id={name + " flag"} className="  bg-light-mode-background rounded-2xl overflow-hidden dark:bg-dark-mode-elements shadow-lg cursor-pointer"  >
    <div className="aspect-video overflow-hidden h-full w-full">
        <img  src={flag} alt={alt} className=" h-full w-full object-cover" />
    </div>
        
        <div className="flex-col flex py-8 px-8" >
             <h3 className="mb-4 text-2xl overflow-ellipsis w-[15rem] whitespace-nowrap overflow-hidden">{name}</h3>
        <p>Population:{population.toLocaleString()} </p>
        <p>Region: {region}</p>
        <p className="overflow-ellipsis w-[15rem] whitespace-nowrap overflow-hidden">Capital: {capital}</p>

        </div>
       
    </div>
    )
   
}