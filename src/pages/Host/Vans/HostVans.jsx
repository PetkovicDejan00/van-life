import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import '../host.css'

const HostVans = () => {
    const [listedVans, setListedVans] = useState([])

    useEffect(() => {
        fetch('/api/host/vans')
        .then(res => res.json())
        .then(data => setListedVans(data.vans))
    }, [])

    return (
        <section className="container">
            <h1 className="host-vans-header">Your listed vans</h1>
            {listedVans.length > 1 ? 
                <div className="host-vans-section">
                    {listedVans?.map((van) => {
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
                : <h2>Loading...</h2> 
            } 
        </section>
    )
}

export default HostVans