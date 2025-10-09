
import './App.css'
import Filter from './components/Filter.tsx'
import Search from './components/Search'
import Header from './components/Header'
import FlagList from './components/FlagList'

function App() {
  

  return (
    <>  
    <h1>Hello</h1>
    <Header />
    <main>
      <div>
        <Search />
        <Filter />
      </div>
      <FlagList />
    </main>
     
    </>
  )
}

export default App
