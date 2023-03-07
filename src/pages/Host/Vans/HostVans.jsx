import React from 'react'
import {Link} from 'react-router-dom'
import './host.css'
import { useQuery } from '@tanstack/react-query'
import LoadingCircle from '../../../components/LoadingCircle/LoadingCircle'
import { getHostVans } from '../../../api/api'

const HostVans = () => {

    const {isLoading, isError, error, data} = useQuery({
        queryKey: ['host-vans'],
        queryFn: () => getHostVans()
    })

    const listedVans = data?.data.vans

    if (isLoading) return <LoadingCircle />
    if (isError) return <h1 className="error-message">{error.message}</h1>

    return (
        <section className="container">
            <h1 className="host-vans-header">Your listed vans</h1>
            <div className="host-vans-section">
                {listedVans.map((van) => {
                    const {id, name, price, imageUrl} = van;
                    return (
                        <article className="host-vans-card" key={id}>
                            <Link to={id}>
                                <img src={imageUrl} />
                                <div>
                                    <h3>{name}</h3>
                                    <p>{`$${price}/day`}</p>
                                </div>
                            </Link>
                        </article>
                    )
                })}
                </div>
        </section>
    )
}

export default HostVans