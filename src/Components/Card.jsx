import React from 'react'
import { useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { RiSearch2Line } from 'react-icons/ri'
import { fetchAllModsList, fetchMoreInformation } from './api.tsx'

import './style.css'

const Card = ({ pokemon, loading }) => {
  const [showModal, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [modName, setModName] = useState('')
  const [searchInput, setSearchInput] = useState('')

  /* const openPokeInfo = async (res) => {
    setModName(res.name)
    handleShow()
  } */

  return (
    <>
      <Modal
        show={showModal}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{modName}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="poke-content"></Modal.Body>
      </Modal>

      <div class="form-group has-search">
        <span class="fa fa-search form-control-feedback">
          <RiSearch2Line className="search-icon" />
        </span>
        <input
          type="text"
          class="form-control"
          onChange={(event) => {
            setSearchInput(event.target.value)
          }}
          placeholder="Search"
        />
      </div>

      <div className="row card-row">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          pokemon
            .filter((mods) => {
              if (searchInput == '') {
                return mods
              } else if (
                mods.name.toLowerCase().includes(searchInput.toLowerCase())
              ) {
                return mods
              }
            })
            .map((mods) => {
              return (
                // <div className="row">

                <div className="col-md-3">
                  <div
                    className="card poke-card"
                    key={mods.id}
                    onClick={() => fetchAllModsList(mods)}
                  >
                    {/* <p className="card-id">{item.id}</p> */}
                    <div className="card-body">
                      <h5 className="card-title poke-name">{mods.name}</h5>
                    </div>
                  </div>
                  <br />
                </div>
                // </div>
              )
            })
        )}
      </div>
    </>
  )
}

export default Card
