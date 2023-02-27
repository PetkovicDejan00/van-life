import React, {useState, useEffect} from 'react'
import {useParams, NavLink, Link, Outlet} from 'react-router-dom'

const HostVanDetails = () => {
    const params = useParams()
    const [hostVan, setHostVan] = useState([])
    
    useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
        .then(res => res.json())
        .then(data => setHostVan(data.vans))
    }, [params.id])

    console.log(hostVan)

    if (!hostVan) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <div className="return-link">
                <Link to=".." relative="path">🡠 Back to all vans</Link>
            </div>
            {hostVan ? (
                <div className="host-van-details">
                    <div className="host-van-details-header">
                        <img src={hostVan.imageUrl} />
                        <div className="host-van-details-header-text">
                            <h4 className={`van-type-tag ${hostVan.type}`}>{hostVan.type}</h4>
                            <h2 className="van-title">{hostVan.name}</h2>
                            <p className="van-price"><span>${hostVan.price}</span>/day</p>
                        </div>
                    </div>

                    <div className="host-van-details-text">
                        <div className="host-links">
                            <NavLink to="." end>Details</NavLink>
                            <NavLink to="pricing">Pricing</NavLink>
                            <NavLink to="photos">Photos</NavLink>
                        </div>
                        <Outlet 
                            context={[hostVan]}
                        />
                    </div>
                </div>
            ) : <h2>Loading...</h2>
            }
        </>
    )
}

export default HostVanDetails