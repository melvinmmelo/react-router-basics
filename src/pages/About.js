import React from 'react'
import { useSelector } from 'react-redux';

function About() {

  const user = useSelector((state) => state.user);

  return (
    <div>About { user && user.name }</div>
  )
}

export default About