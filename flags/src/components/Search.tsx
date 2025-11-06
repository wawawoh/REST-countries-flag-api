import {  type ChangeEvent } from "react"

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
            <input className="px-8 py-3 bg-light-mode-background w-full rounded-[0.5rem] text-light-mode-input shadow-lg/20 shadow-gray-500" type="text" placeholder="Search for a country" value={search} onChange={handleChange} />
            <label htmlFor=""></label>
        </form>
    )
   
}