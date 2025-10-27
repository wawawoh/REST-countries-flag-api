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
  

  return (
    <>  
    
    <Header />
    <main className="bg-green-100 px-4 m-auto">
      <div className="flex flex-col ">
        <Search search = {search} setSearch={setSearch} />
        <Filter region = {search} setRegion={setRegion} />
      </div>
      
      {/* hide or show the flags based off clicking  */}
      {displayInfo && <div>
        <DisplayFlag displayInfo = {displayInfo} setDisplayInfo={setDisplayInfo} />
      </div>}

      <div id="flag" className={displayInfo !=="" ? "hidden" :  "visible"}>
    <FlagList search = {search} region = {region} setDisplayInfo = {setDisplayInfo} />
      </div>
      
    </main>
     
    </>
  )
}

export default App
