import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ContextGlobal } from '../Components/Context/global.context'


export const Detail = () => {

  const {theme} = useContext(ContextGlobal)
  const [dentist, setDentist] = useState({})
  const { id } = useParams()
  const navigate = useNavigate()

  const URL = `https://jsonplaceholder.typicode.com/users/${id}`

  useEffect(() => {
    fetch(URL)
      .then(resp => resp.json())
      .then(data => setDentist(data))
  }, [])

  return (
    <div className='details'>
      <div style={{boxShadow: theme.cardShadow, backgroundColor: theme.cardBg}}>
        <h1>+Información del dentista: {dentist.id} </h1>
        <h2>Nombre: {dentist.name}</h2>
        <h3>Email: {dentist.email}</h3>
        <h3>Web: {dentist.website}</h3>
        <button onClick={() => navigate(-1)} style={{backgroundColor: theme.addBtnFavBg, color: theme.font}}>Back</button>
      </div>
    </div>
  )
}
