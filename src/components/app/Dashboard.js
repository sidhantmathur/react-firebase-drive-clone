import React from 'react'
import { Container } from 'react-bootstrap'
import AddFolderBtn from './AddFolderBtn'
import Navigation from './Navigation'

export default function Dashboard() {
  return (
    <>
      <Navigation />
      <Container fluid>
        <AddFolderBtn />
      </Container>
    </>
  )
}
