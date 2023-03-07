import React from 'react'
import {useParams, NavLink, Link, Outlet} from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import LoadingCircle from '../../../components/LoadingCircle/LoadingCircle'
import { getSingleHostVan } from '../../../api/api'

const HostVanDetails = () => {
    const params = useParams()

    const {isFetching, isError, error, data} = useQuery({
        queryKey: ['host-van'],
        queryFn: () => getSingleHostVan(params.id)
    })

    const hostVan = data?.data?.vans

    if (isFetching) return <LoadingCircle />
    if (isError) return <h1 className="error-message">{error.message}</h1>

    return (
        <>
            <div className="return-link host-return">
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
                        <Outlet context={[hostVan]} />
                    </div>
                </div>
            ) : <h1 className="container">Wanted van is not on the list.</h1>
            }
        </>
    )
}

export default HostVanDetails