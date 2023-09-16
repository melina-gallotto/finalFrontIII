import React, { useContext } from 'react'
import Form from '../Components/Form'
import { ContextGlobal } from '../Components/Context/global.context'


export const Contact = () => {

  const {theme} = useContext(ContextGlobal)

  return (
    <div className='contact'>

      <div className='form-div' style={{backgroundColor: theme.formBg, boxShadow: theme.cardShadow}}>
        <h2>Contactanos</h2>
        <p>En breve te enviaremos más información</p>
        <Form />
      </div>

    </div>
  )
}
