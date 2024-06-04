import React from "react"
import { Link } from "react-router-dom"

export default function Home() {
    return(
        <div className="home-container">
            <h1>You got travel plans, we got the travel vans.</h1>
            <p>Add adventures to your life by joining the #VanLife movement. Rent the perfect van to make your perfect road trip.</p>
            <Link to="vans">Find your van</Link>
        </div>    
    )
}