import React from 'react'
import { Link } from 'react-router-dom'
import { getHostVans } from '../../../api/api'
import { useQuery } from '@tanstack/react-query'
import { BsStarFill } from "react-icons/bs"
import './dashboard.css'
import LoadingCircle from '../../../components/LoadingCircle/LoadingCircle'

const Dashboard = () => {

  const {isLoading, isError, error, data} = useQuery({
    queryKey: ['dashboard-host-vans'],
    queryFn: () => getHostVans()
  })

  const listedVans = data?.data.vans

  if (isLoading) return <LoadingCircle />
  if (isError) return <h1 className="error-message">{error.message}</h1>

  const elements = () => {
    return (
        <div className="host-vans-section">
          {listedVans?.map((van) => {
          const {id, name, price, imageUrl} = van;
            return (
              <div className="dashboard-van-card" key={id}>
                <img src={imageUrl} alt={`Photo of ${name}`} />
                <div className="dashboard-van-info">
                  <h3>{name}</h3>
                  <p>${price}/day</p>
                </div>
                <Link to={`vans/${id}`}>View</Link>
              </div>
            )
          })}
        </div>
    )
  }

  return (
    <>
      <section className="host-dashboard-earnings container">
        <div className="info">
          <h1>Welcome!</h1>
          <p>Income last <span>30 days</span></p>
          <h2>$2,260</h2>
        </div>
        <Link to="income">Details</Link>
      </section>
      <section className="host-dashboard-reviews container">
        <h2>Review score</h2>
        <BsStarFill className="star" />
        <p>
          <span>5.0</span>/5
        </p>
        <Link to="reviews">Details</Link>
      </section>
      <section className="host-dashboard-vans container">
        <div className="top">
          <h2>Your listed vans</h2>
          <Link to="vans">View all</Link>
        </div>
          {elements()}
      </section>
    </>
  )
}

export default Dashboard