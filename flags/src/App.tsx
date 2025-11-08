import { useState } from "react"
import './App.css'
import Filter from './components/Filter.tsx'
import Search from './components/Search'

import FlagList from './components/FlagList'

import type { Country } from "./types/Country.ts"





function App() {
  
  const [search, setSearch] = useState("")
   const [region, setRegion] = useState("")
   
   const [data, setData] = useState<Country[]>([])

  

  return (
    
    
    <main className="bg-light-mode-background p-4 dark:bg-dark-mode-background">
      <div className="flex flex-col gap-10 pb-2 ">
        <Search search = {search} setSearch={setSearch} />
        <Filter region = {region} setRegion={setRegion} />
      </div>
      
      
      <div id="flag" className="">
    <FlagList search = {search} region = {region}  data={data} setData={setData} />
      </div>
      
    </main>
    
     
    
  )
}

export default App
