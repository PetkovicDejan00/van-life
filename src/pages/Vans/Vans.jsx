import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import './vans.css'

const Vans = () => {
  const [vansData, setVansData] = useState([])

  useEffect(() => {
    fetch("/api/vans")
    .then(res => res.json())
    .then(data => setVansData(data.vans))
  }, [])

  return (
    <section className="vans-section">
      <h1 className="section-title">Explore our van options</h1>
      <div className="vans-page-container">
        {vansData?.map((van) => {
          const {id, imageUrl, name, price, type} = van;
          return (
            <div key={id} className="vans-card">
              <Link to={`/vans/${id}`}>
                <img src={imageUrl} />
                <div className="van-name_price">
                  <h3>{name}</h3>
                  <div className="rent-price">
                    <h3>{`$${price}`}</h3>
                    <span>/day</span>
                  </div>
                </div>
                <h4 className={`van-type-tag ${type}`}>
                  {type}
                </h4>
              </Link>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Vans