import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostVanPricing = () => {
    const [hostVan, setHostVan] = useOutletContext();

  return (
    <h2 className="host-van-pricing">{`$${hostVan.price}.00`}<span>/day</span></h2>
  )
}

export default HostVanPricing