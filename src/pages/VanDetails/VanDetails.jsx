import React, {useEffect, useState} from 'react'
import {useParams, Link} from 'react-router-dom'
import './vanDetails.css'

const VanDetails = () => {
    const params = useParams()
    const [van, setVan] = useState([])

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
        .then(res => res.json())
        .then(data => setVan(data.vans))
    }, [params.id])

    return (
        <div className="van-details-container">
            <div className="return-link vans-return">
                <Link to=".." relative="path">🡠 Back to all vans</Link>
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
            ) : <h2>Loading...</h2>
            }
        </div>
    )
}

export default VanDetails