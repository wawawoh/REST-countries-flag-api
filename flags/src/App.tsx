import { useState } from "react"
import './App.css'
import Filter from './components/Filter.tsx'
import Search from './components/Search'
import Header from './components/Header'
import FlagList from './components/FlagList'


function App() {
  const [lightmode, setLightMode] = useState(true)
  const [search, setSearch] = useState("")
   const [region, setRegion] = useState("")
  

  return (
    <>  
    
    <Header />
    <main>
      <div>
        <Search search = {search} setSearch={setSearch} />
        <Filter region = {search} setRegion={setRegion} />
      </div>
      <FlagList search = {search} region = {region} />
    </main>
     
    </>
  )
}

export default App
