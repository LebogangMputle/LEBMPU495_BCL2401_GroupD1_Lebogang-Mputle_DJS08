import React from "react";
import { useParams, Link, NavLink, Outlet } from "react-router-dom";

export default function HostVanDetail() {
    const { id } = useParams ()
    const [currentVan, setCurrentVan] = React.useState(null)

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616",
    }

    React.useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setCurrentVan(data.vans))
    }, [])

    if (!currentVan) {
        return <h1>Loading...</h1>
    }

    return (
    <section>
        <Link 
            to=".." 
            end
            relative="path"
            className="back-button"
            >
                &larr; <span>back to all vans</span></Link>
    
        <div className="host-van-detail-layout-container">
          <div className="host-van-detail">
            <img src={currentVan.imageUrl}/>
            <div className="host-van-detail-info-text">
                <i
                    className={`van-type van-type-${currentVan.type}`}
                >
                    {currentVan.type}
                </i>
                <h2>{currentVan.name}</h2>
                <p>{currentVan.price}</p>
           </div> 
          </div>

            <nav className="host-van-detail-nav">
                <NavLink
                    to="."
                    style={({ isActive}) => isActive ? activeStyles : null}
                >
                    Details
                </NavLink>

                <NavLink
                    to="pricing"
                    style={({ isActive}) => isActive ? activeStyles : null}
                >
                    Pricing
                </NavLink>

                <NavLink
                    to="photos"
                    style={({ isActive}) => isActive ? activeStyles : null}
                >
                    Photos
                </NavLink>
            </nav>

          <Outlet context={{currentVan}} />
        </div>
    </section>
        
    )
}