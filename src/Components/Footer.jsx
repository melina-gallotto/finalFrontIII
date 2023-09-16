import React, { useContext } from 'react'
import { ContextGlobal } from './Context/global.context'

const Footer = () => {

  const {theme} = useContext(ContextGlobal)

  return (
    <footer style={{backgroundColor: theme.footerBackground}}>
        <p>Powered by</p>
        <img src="/images/DH.png" alt='DH-logo' />
        <div className="icons-footer">
          <img
            className="icons"
            src="/images/ico-facebook.png"
            alt="Logo de Facebook"
          />
          <img
            className="icons"
            src="/images/ico-instagram.png"
            alt="Logo de Instagram"
          />
          <img
            className="icons"
            src="/images/ico-tiktok.png"
            alt="Logo de TikTok"
          />
          <img
            className="icons"
            src="/images/ico-whatsapp.png"
            alt="Logo de Whatsapp"
          />
        </div>
    </footer>
  )
}

export default Footer
