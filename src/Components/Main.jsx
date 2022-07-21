import React from 'react'
import { useEffect, useState } from 'react'
import Card from './Card'
import { fetchAllModsList, fetchMoreInformation } from './api.tsx'

import './style.css'
import logo from '../poke-logo.jpeg'

const Main = () => {
  const [loading, setLoading] = useState(true)
  const [mods, setMods] = React.useState([])
  //const [selectedMods, selectedModsSet] = React.useState(null)

  useEffect(() => {
    fetchAllModsList().then((allModsListData) => {
      setMods(allModsListData)
    })
  }, [])

  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand poke-nav" href="#">
          <img
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt=""
          />
          &nbsp; Poke App
        </a>
      </nav>
      <div className="container">
        <Card mods={mods} loading={loading}></Card>
      </div>
    </>
  )
}

export default Main
