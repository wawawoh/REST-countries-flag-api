import { useState } from "react"
import './App.css'
import Filter from './components/Filter.tsx'
import Search from './components/Search'
import Header from './components/Header'
import FlagList from './components/FlagList'
import DisplayFlag from './components/DisplayFlag'




function App() {
  const [lightmode, setLightMode] = useState(true)
  const [search, setSearch] = useState("")
   const [region, setRegion] = useState("")
   const [displayInfo, setDisplayInfo] = useState("")
   const [data, setData] = useState<Country[]>([])

  

  return (
    <>  
    
    <Header />
    <main className="bg-green-100 p-4 ">
      <div className="flex flex-col gap-10 pb-2 ">
        <Search search = {search} setSearch={setSearch} />
        <Filter region = {region} setRegion={setRegion} />
      </div>
      
      
      <div id="flag" className="">
    <FlagList search = {search} region = {region} setDisplayInfo = {setDisplayInfo} data={data} setData={setData} />
      </div>
      
    </main>
     
    </>
  )
}

export default App
