import React from 'react'
import Featured from '../Featured'
import Navbar from '../Navbar'
const HomePage = ({ type }) => {
  return (
    <>
    <Navbar/>
    <Featured  type={type} />
    </>
  )
}

export default HomePage