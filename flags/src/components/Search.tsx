import { useState, type ChangeEvent } from "react"

interface Props {
    search:string
    setSearch: React.Dispatch<React.SetStateAction<string>>
}


export default function Search ({search, setSearch}:Props ) {
    

    const handleChange =  (e:ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
        console.log("this is the search value ", search)
    }   
      
    return (

        <form action="">
            <input type="text" placeholder="Search for a country" value={search} onChange={handleChange} />
            <label htmlFor=""></label>
        </form>
    )
   
}