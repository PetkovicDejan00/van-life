import React from 'react'
import {Link, useSearchParams} from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getVans } from '../../api/api'
import './vans.css'
import LoadingCircle from '../../components/LoadingCircle/LoadingCircle'

const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const {isLoading, isError, error, data} = useQuery({
    queryKey: ['vans'],
    queryFn: () => getVans()
  })
  const vansData = data?.data.vans
  const typeFilter = searchParams.get('type')
  
  const displayedVans = typeFilter 
  ? vansData.filter(van => van.type.toLowerCase() === typeFilter)
  : vansData

  const vanElements = displayedVans?.map((van) => {
    const {id, imageUrl, name, price, type} = van;
    return (
      <div key={id} className="vans-card">
        <Link to={id} state={{
        search: `?${searchParams.toString()}`, 
        type: typeFilter
        }}>
          <img src={imageUrl} />
          <div className="van-name_price">
            <h3>{name}</h3>
            <h3 className="rent-price">{`$${price}`}<span>/day</span></h3>
          </div>
          <h4 className={`van-type-tag ${type}`}>
            {type}
          </h4>
        </Link>
      </div>
    )
  })

  function handleFilterChange(key, value) {
    setSearchParams(prevParams => {
      if (value === null) {
        prevParams.delete(key)
      } else {
        prevParams.set(key, value)
      }
      return prevParams
    })
  }

  if (isLoading) return <LoadingCircle />
  if (isError) return <h1 className="error-message">{error.message}</h1>

  return (
    <section className="vans-section container">
      <h1 className="section-title">Explore our van options</h1>
      <div className="van-list-filter-buttons">
        <button 
          onClick={() => handleFilterChange("type", "simple")} 
          className={`van-type simple-filter ${typeFilter === 'simple' && 'selected'}`}>
            Simple
        </button>
        <button 
          onClick={() => handleFilterChange("type", "luxury")} 
          className={`van-type luxury-filter ${typeFilter === 'luxury' && 'selected'}`}>
            Luxury
        </button>
        <button 
          onClick={() => handleFilterChange("type", "rugged")} 
          className={`van-type rugged-filter ${typeFilter === 'rugged' && 'selected'}`}>
            Rugged
        </button>
        {typeFilter &&
          <button onClick={() => setSearchParams({})} className="clear-filters">Clear filters</button>
        }
      </div>
      <div className="vans-page-container">
        {vanElements}
      </div>
    </section>
  )
}

export default Vans