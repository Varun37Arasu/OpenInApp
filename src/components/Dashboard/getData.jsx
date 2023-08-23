import React from 'react'
import inpData from '../../root.json'

const data = JSON.stringify(inpData)
localStorage.setItem('data', data)

const getData = () => {
  return <></>
}

export default getData;
