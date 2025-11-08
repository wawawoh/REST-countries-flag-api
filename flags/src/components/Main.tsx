import { useState } from "react"
import Header from "./Header"
import { RouterProvider,  type DataRouter} from "react-router-dom"





interface props {
    router: DataRouter;
}

export default function Main ({router}:props) {
    const [lightmode, setLightMode] = useState(true)
    return (
         <div id="entire-css" className={lightmode ? "light" : "dark"}>
              <Header lightmode={lightmode} setLightMode = {setLightMode} / >
        
           
            <RouterProvider router={router} />
             </div>
    )
}