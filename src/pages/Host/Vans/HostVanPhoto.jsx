import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostVanPhoto = () => {
    const [hostVan, setHostVan] = useOutletContext();

  return (
    <div>
        <img className="host-van-photo" src={hostVan.imageUrl} />
    </div>
  )
}

export default HostVanPhoto