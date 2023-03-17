import React from 'react'
import { useParams } from 'react-router-dom'

function Book() {
  const { id } = useParams();
  return (
    <h1>Welcome to {id}</h1>
  )
}

export default Book