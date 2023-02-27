import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostVanInfo = () => {
    const [hostVan, setHostVan] = useOutletContext();

  return (
    <div>
        <p><b>Name: </b>{hostVan.name}</p>
        <p><b>Description: </b>{hostVan.description}</p>
        <p><b>Visibility: </b>Public</p>
    </div>
  )
}

export default HostVanInfo