interface Props {
    name:string,
    population:number,
    region:string,
    flag:string,
    alt:string,
    capital:string
}

export default function Flag ({name, population, region, flag,alt,capital}:Props) {
    return (
 <div>
        <img src={flag} alt={alt} />
        <h3>{name}</h3>
        <p>Population:{population} </p>
        <p>Region: {region}</p>
        <p>Capital: {capital}</p>
    </div>
    )
   
}