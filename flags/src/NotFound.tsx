import { Link } from "react-router-dom"

export default function NotFound () {
    return (
        <div>
          <h1>This page is not found</h1>
          <Link to={"/"}>
            <button>Go back home</button>
          </Link>
        </div>
      
    )
}