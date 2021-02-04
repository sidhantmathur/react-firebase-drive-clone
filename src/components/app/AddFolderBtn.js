import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderPlus } from '@fortawesome/free-solid-svg-icons'
import { database } from '../../firebase'

export default function AddFolderBtn() {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState("")

  function openModal () {
    setOpen(true)
  }

  function closeModal () {
    setOpen(false)
  }

  function handleSubmit (e) {
    e.preventDefault()
    // Create folder in db

    database.folders.add({
      name: name
    })

    setName("")
    closeModal()
  }

  return (
    <>
    <Button onclick={openModal} variant="outline-success" size='sm'>
      <FontAwesomeIcon icon={faFolderPlus} />
    </Button>

    <Modal show={open} onHide={closeModal}>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Folder Name</Form.Label>
            <Form.Control
              type="text" 
              required
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button variant="success" type="submit">
            Add Folder
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
    </>
  )
}
