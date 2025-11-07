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
 <div id={name + " flag"} className="  bg-light-mode-background rounded-2xl overflow-hidden dark:bg-dark-mode-elements"  >
    <div className="aspect-video">
        <img  src={flag} alt={alt} className=" h-full w-full object-cover" />
    </div>
        
        <div className="flex-col flex py-8 px-8" >
             <h3 className="pb-4 text-2xl">{name}</h3>
        <p>Population:{population} </p>
        <p>Region: {region}</p>
        <p>Capital: {capital}</p>

        </div>
       
    </div>
    )
   
}