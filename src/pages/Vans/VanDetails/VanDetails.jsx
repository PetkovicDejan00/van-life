import React from 'react'
import {useParams, Link, useLocation} from 'react-router-dom'
import LoadingCircle from '../../../components/LoadingCircle/LoadingCircle'
import './vanDetails.css'
import { useQuery } from '@tanstack/react-query'
import { getSingleVan } from '../../../api/api'

const VanDetails = () => {
    const params = useParams()
    const location = useLocation()

    const {isError, error, data, isFetching} = useQuery({
        queryKey: ['van'],
        queryFn: () => getSingleVan(params.id)
    })
    const van = data?.data.vans;

    const search = location.state?.search || ""
    const vanType = location.state?.type || 'all'

    if (isFetching) return <LoadingCircle />
    if (isError) return <h1 className="error-message">{error.message}</h1>

    return (
        <div className="van-details-container container">
            <div className="return-link vans-return">
                <Link 
                    to={`..${search}`} 
                    relative="path">
                        🡠 Back to {vanType} vans
                </Link>
            </div>
            {van ? (
                <div className="van-details">
                    <img src={van.imageUrl} />
                    <div className="van-details-text">
                        <div>
                            <h2 className="van-title">{van.name}</h2>
                            <h4 className={`van-type-tag ${van.type} detail-page-tag`}>{van.type}</h4>
                            <p className="van-price"><span>${van.price}</span>/day</p>
                            <p className="van-desc">{van.description}</p>
                        </div>
                        <button className="link-button">Rent this van</button>
                    </div>
                </div>
            ) : <LoadingCircle/>
            }
        </div>
    )
}

export default VanDetails